import {
  REQUEST_STORIES,
  FETCH_SUCCESS,
  FETCH_FAILURE
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
  dispatch(requestStories(countryCode)); //Sets loading state
};

//https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=971ea0c019c44f2295c42cb972032a67
