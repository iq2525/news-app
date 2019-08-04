import {
  REQUEST_STORIES,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  NEWS_API_ENDPOINT,
  NEWS_API_KEY,
  NEWS_API_PAGE_SIZE,
  NEWS_API_COUNTRY_PARAM,
  NEWS_API_KEY_PARAM
} from "../constants/app";

export const requestStories = countryCode => ({
  type: REQUEST_STORIES,
  countryCode
});

export const fetchSuccess = body => ({
  type: FETCH_SUCCESS,
  body
});

export const fetchFailure = error => ({
  type: FETCH_FAILURE,
  error
});

export const fetchStories = countryCode => dispatch => {
  dispatch(requestStories(countryCode));

  const endPoint = `${NEWS_API_ENDPOINT}?${NEWS_API_KEY_PARAM}${
    process.env.REACT_APP_API_KEY
  }&${NEWS_API_PAGE_SIZE}&${NEWS_API_COUNTRY_PARAM}${countryCode}`;
  return fetch(endPoint)
    .then(res => res.json())
    .then(body => dispatch(fetchSuccess(body)))
    .catch(error => dispatch(fetchFailure(error)));
};
