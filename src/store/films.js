import Api from '../services/api';

export const Types = {
  FETCH: 'films/FETCH',
  FETCH_SUCCESS: 'films/FETCH_SUCCESS',
  FETCH_FAILURE: 'films/FETCH_FAILURE',
};

const initialState = {
  loading: true,
  data: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH:
      return Object.assign({}, state, {
        loading: true,
        data: [],
        error: null,
      });
    case Types.FETCH_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        data: action.payload.Search,
        error: null,
      });
    case Types.FETCH_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        data: [],
        error: action.payload.message,
      });
    default:
      return state;
  }
};

export default reducer;

export const fetchFilms = params => async (dispatch) => {
  try {
    dispatch({ type: Types.FETCH });
    const response = await Api.films(params);
    dispatch({ type: Types.FETCH_SUCCESS, payload: response.data });
  } catch (err) {
    dispatch({ type: Types.FETCH_FAILURE, payload: err.response.data });
  }
};
