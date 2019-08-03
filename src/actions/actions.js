import { REQUEST_STORIES } from "../constants/app";

export const requestStories = countryCode => ({
  type: REQUEST_STORIES,
  countryCode
});

export const fetchStories = countryCode => dispatch => {
  dispatch(requestStories(countryCode));
};
