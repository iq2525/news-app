import configureMockStore from "redux-mock-store";
import { fetchStories, requestStories, fetchSuccess } from "./actions";
import thunk from "redux-thunk";
import { REQUEST_STORIES, FETCH_SUCCESS } from "../constants/app";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("actions", () => {
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

  it("should call REQUEST_STORIES action when fetchStories is called", () => {
    const expectedActions = [{ type: REQUEST_STORIES, countryCode: "au" }];

    const store = mockStore({ countries: [], isLoading: true, isError: false });

    store.dispatch(fetchStories("au"));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
