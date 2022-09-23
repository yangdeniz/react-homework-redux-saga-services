import { applyMiddleware, combineReducers, compose, legacy_createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import serviceDetailsReducer from './reducers/service-details-reducer';
import servicesReducer from './reducers/services-reducer';
import saga from './sagas/root-saga';

const reducer = combineReducers({
  services: servicesReducer,
  serviceDetails: serviceDetailsReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = legacy_createStore(
  reducer, 
  compose(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(saga);

export default store;