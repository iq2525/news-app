import reducer from "../reducers/reducer";
import {
  REQUEST_STORIES,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from "../constants/app";
import { classBody } from "@babel/types";

describe("actions", () => {
  it("should return then initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      isLoading: false,
      isError: false,
      stories: null
    });
  });

  it("should handle REQUEST_STORIES", () => {
    expect(
      reducer(
        {},
        {
          type: REQUEST_STORIES,
          countryCode: "au"
        }
      )
    ).toEqual({
      isLoading: true,
      isError: false,
      stories: null
    });
  });

  it("should handle FETCH_SUCCESS", () => {
    const responseBody = {
      articles: "Articles"
    };

    expect(
      reducer(
        {},
        {
          type: FETCH_SUCCESS,
          body: responseBody
        }
      )
    ).toEqual({
      isLoading: false,
      isError: false,
      stories: responseBody.articles
    });
  });

  it("should handle FETCH_FAILURE", () => {
    const errorBody = {
      articles: "Articles"
    };

    expect(
      reducer(
        {},
        {
          type: FETCH_FAILURE,
          ex: errorBody
        }
      )
    ).toEqual({
      isLoading: false,
      isError: true,
      stories: null
    });
  });
});
