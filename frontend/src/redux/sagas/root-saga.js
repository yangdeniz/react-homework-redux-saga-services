import { spawn } from 'redux-saga/effects';
import watchFetchServiceDetailsSaga from './fetch-service-details-saga';
import watchFetchServicesSaga from './fetch-services-saga';

export default function* saga() {
  yield spawn(watchFetchServicesSaga);
  yield spawn(watchFetchServiceDetailsSaga);
}