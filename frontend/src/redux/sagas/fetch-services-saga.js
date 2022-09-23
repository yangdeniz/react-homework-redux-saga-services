import { put, call, take, fork } from 'redux-saga/effects';
import { getServices } from '../../api/get-services';
import { fetchServicesError, fetchServicesSuccess } from '../actions/action-creators';
import { ACTIONS } from '../actions/actions';

function* handleFetchServicesSaga(action) {
  try {
    const data = yield call(getServices);
    yield put(fetchServicesSuccess(data));
  }
  catch (e) {
    yield put(fetchServicesError(e.message));
  }
}

function* watchFetchServicesSaga() {
  while(true) {
    const action = yield take(ACTIONS.FETCH_SERVICES);
    yield fork(handleFetchServicesSaga, action);
  }
}

export default watchFetchServicesSaga;