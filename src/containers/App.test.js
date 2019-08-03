import React from "react";
import { App } from "./App";
import { shallow } from "enzyme";
import { COUNTRIES } from "../constants/app";
import { jsxEmptyExpression } from "@babel/types";

const props = {
  stories: ["Story 1"],
  isLoading: false,
  isError: false,
  fetchStories: jest.fn()
};

describe("<App />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<App {...props} />);

    const CountrySelectorPanel = wrapper.find("CountrySelectorPanel");
    expect(CountrySelectorPanel.length).toEqual(1);
    expect(CountrySelectorPanel.prop("countries")).toEqual(COUNTRIES);
    expect(CountrySelectorPanel.prop("isLoading")).toEqual(props.isLoading);
    expect(CountrySelectorPanel.prop("isError")).toEqual(props.isError);
    expect(CountrySelectorPanel.prop("fetchStories")).toEqual(
      props.fetchStories
    );

    const TopStoriesPanel = wrapper.find("TopStoriesPanel");
    expect(TopStoriesPanel.length).toEqual(1);
    expect(TopStoriesPanel.prop("stories")).toEqual(props.stories);
    expect(TopStoriesPanel.prop("isLoading")).toEqual(props.isLoading);
  });
});
