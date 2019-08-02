import reducer from "../reducers/reducer";
import { REQUEST_STORIES } from "../constants/app";

describe("actions", () => {
  it("should return then initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      isLoading: false,
      isError: false
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
      isError: false
    });
  });
});
