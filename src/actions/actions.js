import {
  REQUEST_STORIES,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  NEWS_API_ENDPOINT_WITH_PARAMS
} from "../constants/app";

export const requestStories = countryCode => ({
  type: REQUEST_STORIES,
  countryCode
});

export const fetchSuccess = body => ({
  type: FETCH_SUCCESS,
  body
});

export const fetchFailure = ex => ({
  type: FETCH_FAILURE,
  ex
});

export const fetchStories = countryCode => dispatch => {
  dispatch(requestStories(countryCode));
  console.log("NEWS_API_ENDPOINT_WITH_PARAMS: ", NEWS_API_ENDPOINT_WITH_PARAMS);
  return fetch(NEWS_API_ENDPOINT_WITH_PARAMS)
    .then(res => res.json())
    .then(body => dispatch(fetchSuccess(body)))
    .catch(ex => dispatch(fetchFailure(ex)));
};
