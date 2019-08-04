import configureMockStore from "redux-mock-store";
import {
  fetchStories,
  requestStories,
  fetchSuccess,
  fetchFailure
} from "./actions";
import thunk from "redux-thunk";
import {
  REQUEST_STORIES,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  NEWS_API_ENDPOINT,
  NEWS_API_KEY_PARAM,
  NEWS_API_PAGE_SIZE,
  NEWS_API_COUNTRY_PARAM
} from "../constants/app";
import fetchMock from "fetch-mock";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("should create action to request Top Stories", () => {
    const countryCode = "au";
    const expectedAction = {
      type: REQUEST_STORIES,
      countryCode
    };
    expect(requestStories(countryCode)).toEqual(expectedAction);
  });

  it("should create FETCH_SUCCESS action", () => {
    const body = "body";
    const expectedAction = {
      type: FETCH_SUCCESS,
      body
    };
    expect(fetchSuccess(body)).toEqual(expectedAction);
  });

  it("should create FETCH_FAILURE action", () => {
    const error = "error";
    const expectedAction = {
      type: FETCH_FAILURE,
      error
    };
    expect(fetchFailure(error)).toEqual(expectedAction);
  });

  it("should call REQUEST_STORIES & async FETCH_SUCCESS when fetchStories is done", () => {
    const fetchBody = { stories: ["story 1"] };
    const countryCode = "au";
    const endPoint = `${NEWS_API_ENDPOINT}?${NEWS_API_KEY_PARAM}${
      process.env.REACT_APP_API_KEY
    }&${NEWS_API_PAGE_SIZE}&${NEWS_API_COUNTRY_PARAM}${countryCode}`;

    fetchMock.getOnce(endPoint, {
      body: fetchBody,
      headers: { "content-type": "application/json" }
    });

    const expectedActions = [
      { type: REQUEST_STORIES, countryCode: countryCode },
      { type: FETCH_SUCCESS, body: fetchBody }
    ];

    const store = mockStore({ countries: [], isLoading: true, isError: false });

    return store.dispatch(fetchStories(countryCode)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should call REQUEST_STORIES & async FETCH_FAILURE when fetchStories fail", () => {
    const fetchFailure = "Fetch Error";
    const countryCode = "au";
    const endPoint = `${NEWS_API_ENDPOINT}?${NEWS_API_KEY_PARAM}${
      process.env.REACT_APP_API_KEY
    }&${NEWS_API_PAGE_SIZE}&${NEWS_API_COUNTRY_PARAM}${countryCode}`;

    fetchMock.getOnce(endPoint, {
      throws: fetchFailure
    });

    const expectedActions = [
      { type: REQUEST_STORIES, countryCode: countryCode },
      { type: FETCH_FAILURE, error: fetchFailure }
    ];

    const store = mockStore({ countries: [], isLoading: true, isError: false });

    return store.dispatch(fetchStories(countryCode)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
