import { REQUEST_STORIES } from "../constants/app";

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

    default:
      return state;
  }
};

export default reducer;
