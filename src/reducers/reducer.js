import { REQUEST_STORIES } from "../constants/app";

const defaultState = {
  isLoading: false,
  isError: false
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_STORIES:
      return {
        ...state,
        isLoading: true,
        isError: false
      };

    default:
      return state;
  }
};

export default reducer;
