import configureMockStore from "redux-mock-store";
import { fetchStories, requestStories } from "./actions";
import thunk from "redux-thunk";
import { REQUEST_STORIES } from "../constants/app";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("actions", () => {
  it("should create action to request Top Stories", () => {
    const countryCode = "Finish docs";
    const expectedAction = {
      type: REQUEST_STORIES,
      countryCode
    };
    expect(requestStories(countryCode)).toEqual(expectedAction);
  });

  it("should call REQUEST_STORIES action when fetchStories is called", () => {
    const expectedActions = [{ type: REQUEST_STORIES, countryCode: "au" }];

    const store = mockStore({ countries: [], isLoading: true, isError: false });

    store.dispatch(fetchStories("au"));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
