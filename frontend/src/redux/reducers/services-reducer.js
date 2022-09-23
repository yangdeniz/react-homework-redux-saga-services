import { ACTIONS } from '../actions/actions';

const initialState = {
  data: [],
  loading: false,
  error: null
};

const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_SERVICES:
      return { ...state, loading: true, data: [], error: null };

    case ACTIONS.FETCH_SERVICES_SUCCESS:
      const {services} = action.payload;
      return { ...state, data: services, loading: false, error: null };

    case ACTIONS.FETCH_SERVICES_ERROR:
      const {error} = action.payload;
      return { ...state, data: [], loading: false, error };

    default:
      return state;
  }
};

export default servicesReducer;