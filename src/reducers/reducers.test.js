import reducer from "../reducers/reducer";
import {
  REQUEST_STORIES,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  COUNTRIES
} from "../constants/app";

describe("actions", () => {
  it("should return then initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      isLoading: false,
      isError: false,
      stories: null,
      selectedCountry: null
    });
  });

  it("should handle REQUEST_STORIES", () => {
    expect(
      reducer(
        {},
        {
          type: REQUEST_STORIES,
          country: COUNTRIES[0]
        }
      )
    ).toEqual({
      isLoading: true,
      isError: false,
      stories: null,
      selectedCountry: COUNTRIES[0].name
    });
  });

  it("should handle FETCH_SUCCESS", () => {
    const responseBody = {
      articles: "Articles"
    };

    expect(
      reducer(
        {
          isLoading: true,
          isError: false,
          stories: null,
          selectedCountry: COUNTRIES[0].name
        },
        {
          type: FETCH_SUCCESS,
          body: responseBody
        }
      )
    ).toEqual({
      isLoading: false,
      isError: false,
      stories: responseBody.articles,
      selectedCountry: COUNTRIES[0].name
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
      stories: null,
      selectedCountry: null
    });
  });
});
