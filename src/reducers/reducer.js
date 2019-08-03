import {
  REQUEST_STORIES,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from "../constants/app";

const initialState = {
  isLoading: false,
  isError: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_STORIES:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        stories: action.body.articles
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        stories: null
      };
    default:
      return state;
  }
};

export default reducer;
