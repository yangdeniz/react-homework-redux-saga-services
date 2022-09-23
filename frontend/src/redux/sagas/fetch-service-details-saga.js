import { call, fork, put, take } from 'redux-saga/effects';
import { getServiceDetails } from '../../api/get-service-details';
import { fetchServiceDetailsError, fetchServiceDetailsSuccess } from '../actions/action-creators';
import { ACTIONS } from '../actions/actions';

function* handleFetchServiceDetailsSaga(action) {
  try {
    const data = yield call(getServiceDetails, action.payload.id);
    yield put(fetchServiceDetailsSuccess(data));
  }
  catch (e) {
    yield put(fetchServiceDetailsError(e.message));
  }
}

function* watchFetchServiceDetailsSaga() {
  while(true) {
    const action = yield take(ACTIONS.FETCH_SERVICE_DETAILS);
    yield fork(handleFetchServiceDetailsSaga, action);
  }
}

export default watchFetchServiceDetailsSaga;