import { REQUEST_STORIES, FETCH_SUCCESS } from "../constants/app";

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
    default:
      return state;
  }
};

export default reducer;
