import {
  REQUEST_STORIES,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  NEWS_API_ENDPOINT,
  NEWS_API_KEY,
  NEWS_API_PAGE_SIZE,
  NEWS_API_COUNTRY_PARAM
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

  const endPoint = `${NEWS_API_ENDPOINT}?${NEWS_API_KEY}&${NEWS_API_PAGE_SIZE}&${NEWS_API_COUNTRY_PARAM}${countryCode}`;
  return fetch(endPoint)
    .then(res => res.json())
    .then(body => dispatch(fetchSuccess(body)))
    .catch(ex => dispatch(fetchFailure(ex)));
};
