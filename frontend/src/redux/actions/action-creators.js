import { ACTIONS } from './actions';

export const fetchServices = () => ({
  type: ACTIONS.FETCH_SERVICES
});

export const fetchServicesSuccess = (services) => ({
  type: ACTIONS.FETCH_SERVICES_SUCCESS,
  payload: { services }
});

export const fetchServicesError = (error) => ({
  type: ACTIONS.FETCH_SERVICES_ERROR,
  payload: { error }
});

export const fetchServiceDetails = (id) => ({
  type: ACTIONS.FETCH_SERVICE_DETAILS,
  payload: { id }
});

export const fetchServiceDetailsSuccess = (service) => ({
  type: ACTIONS.FETCH_SERVICE_DETAILS_SUCCESS,
  payload: { service }
});

export const fetchServiceDetailsError = (error) => ({
  type: ACTIONS.FETCH_SERVICE_DETAILS_ERROR,
  payload: { error }
});