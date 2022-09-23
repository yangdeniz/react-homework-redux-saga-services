import { ACTIONS } from "../actions/actions";

const initialState = {
  data: null,
  loading: false,
  error: null,
  id: -1
};

const serviceDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_SERVICE_DETAILS:
      const {id} = action.payload;
      return { ...state, loading: true, data: null, error: null, id };

    case ACTIONS.FETCH_SERVICE_DETAILS_SUCCESS:
      const {service} = action.payload;
      return { ...state, loading: false, data: service, error: null };
    
    case ACTIONS.FETCH_SERVICE_DETAILS_ERROR:
      const {error} = action.payload;
      return { ...state, loading: false, data: null, error };

    default:
      return state;
  }
};

export default serviceDetailsReducer;