import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { shallow } from "enzyme";

const props = {
  stories: ["Story 1"],
  isLoading: false,
  isError: false
};

const countries = [
  {
    name: "Australia",
    code: "au"
  },
  {
    name: "France",
    code: "fr"
  },
  {
    name: "India",
    code: "in"
  },
  {
    name: "UK",
    code: "au"
  },
  {
    name: "USA",
    code: "au"
  }
];

describe("<App />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<App {...props} />);

    const CountrySelectorPanel = wrapper.find("CountrySelectorPanel");
    expect(CountrySelectorPanel.length).toEqual(1);
    //TODO more tests
    const TopStoriesPanel = wrapper.find("TopStoriesPanel");
    expect(TopStoriesPanel.length).toEqual(1);
  });
});
