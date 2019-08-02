import { requestStories } from "./actions";
import { REQUEST_STORIES } from "../constants/app";

describe("actions", () => {
  it("should create action to request Top Stories", () => {
    const countryCode = "Finish docs";
    const expectedAction = {
      type: REQUEST_STORIES,
      countryCode
    };
    expect(requestStories(countryCode)).toEqual(expectedAction);
  });
});
