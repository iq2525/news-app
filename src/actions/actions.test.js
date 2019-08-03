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
  FETCH_FAILURE
} from "../constants/app";
import fetchMock from "fetch-mock";
import { NEWS_API_ENDPOINT_WITH_PARAMS } from "../constants/app";

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
    const ex = "ex";
    const expectedAction = {
      type: FETCH_FAILURE,
      ex
    };
    expect(fetchFailure(ex)).toEqual(expectedAction);
  });

  it("should call REQUEST_STORIES & async FETCH_SUCCESS when fetchStories is done", () => {
    const fetchBody = { stories: ["story 1"] };
    fetchMock.getOnce(NEWS_API_ENDPOINT_WITH_PARAMS, {
      body: fetchBody,
      headers: { "content-type": "application/json" }
    });

    const COUNTRY_CODE = "au";
    const expectedActions = [
      { type: REQUEST_STORIES, countryCode: COUNTRY_CODE },
      { type: FETCH_SUCCESS, body: fetchBody }
    ];

    const store = mockStore({ countries: [], isLoading: true, isError: false });

    return store.dispatch(fetchStories(COUNTRY_CODE)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should call REQUEST_STORIES & async FETCH_FAILURE when fetchStories fail", () => {
    const fetchFailure = "Fetch Error";
    fetchMock.getOnce(NEWS_API_ENDPOINT_WITH_PARAMS, {
      throws: fetchFailure
    });

    const COUNTRY_CODE = "au";
    const expectedActions = [
      { type: REQUEST_STORIES, countryCode: COUNTRY_CODE },
      { type: FETCH_FAILURE, ex: fetchFailure }
    ];

    const store = mockStore({ countries: [], isLoading: true, isError: false });

    return store.dispatch(fetchStories(COUNTRY_CODE)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
