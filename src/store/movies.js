import Api from '../services/api';

export const Types = {
  FETCH: 'movies/FETCH',
  FETCH_SUCCESS: 'movies/FETCH_SUCCESS',
  FETCH_MOVIE: 'movies/FETCH_MOVIE',
  FETCH_MOVIE_SUCCESS: 'movies/FETCH_MOVIE_SUCCESS',
  FETCH_FAILURE: 'movies/FETCH_FAILURE',
};

const initialState = {
  loading: false,
  data: [],
  error: null,
  selected: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH:
      return Object.assign({}, state, {
        loading: true,
      });
    case Types.FETCH_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        data: action.payload.Search,
        error: action.payload.Error,
      });
    case Types.FETCH_MOVIE:
      return Object.assign({}, state, {
        loading: true,
      });
    case Types.FETCH_MOVIE_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        selected: action.payload,
      });
    case Types.FETCH_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.payload.message,
      });
    default:
      return state;
  }
};

export default reducer;

export const fetchMovies = params => async (dispatch) => {
  try {
    dispatch({ type: Types.FETCH });
    const response = await Api.movies(params);
    dispatch({ type: Types.FETCH_SUCCESS, payload: response.data });
  } catch (err) {
    dispatch({ type: Types.FETCH_FAILURE, payload: err.response.data });
  }
};
export const selectMovie = params => async (dispatch) => {
  try {
    dispatch({ type: Types.FETCH_MOVIE });
    const response = await Api.movies(params);
    dispatch({ type: Types.FETCH_MOVIE_SUCCESS, payload: response.data });
  } catch (err) {
    dispatch({ type: Types.FETCH_FAILURE, payload: err.response.data });
  }
};
