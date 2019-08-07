import React from "react";
import { App } from "./App";
import { shallow } from "enzyme";
import { COUNTRIES, LOADING_TEXT, ERROR_TEXT } from "../constants/app";

const props = {
  stories: [
    {
      title: "Story 1",
      description: "Description 1",
      url: "http://test.com/1",
      urlToImage: "http://test.com/image1.jpg"
    },
    {
      title: "Story 2",
      description: "Description 2",
      url: "http://test.com/2",
      urlToImage: "http://test.com/image2.jpg"
    }
  ],
  isLoading: false,
  isError: false,
  fetchStories: jest.fn(),
  selectedCountry: null
};

describe("<App />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<App {...props} />);

    const StatusBar = wrapper.find("StatusBar");
    expect(StatusBar.text()).toEqual("");

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
  });

  it("renders loading state", () => {
    const propsLoading = { ...props, isLoading: true, stories: null };
    const wrapper = shallow(<App {...propsLoading} />);

    const StatusBar = wrapper.find("StatusBar");
    expect(StatusBar.text()).toEqual(LOADING_TEXT);

    const CountrySelectorPanel = wrapper.find("CountrySelectorPanel");
    expect(CountrySelectorPanel.length).toEqual(1);
    expect(CountrySelectorPanel.prop("isLoading")).toEqual(true);

    const TopStoriesPanel = wrapper.find("TopStoriesPanel");
    expect(TopStoriesPanel.length).toEqual(0);
  });

  it("renders error state", () => {
    const propsError = { ...props, isError: true, stories: null };
    const wrapper = shallow(<App {...propsError} />);

    const StatusBar = wrapper.find("StatusBar");
    expect(StatusBar.text()).toEqual(ERROR_TEXT);

    const CountrySelectorPanel = wrapper.find("CountrySelectorPanel");
    expect(CountrySelectorPanel.length).toEqual(1);

    const TopStoriesPanel = wrapper.find("TopStoriesPanel");
    expect(TopStoriesPanel.length).toEqual(0);
  });

  it("renders success state", () => {
    const propsSuccess = { ...props, selectedCountry: COUNTRIES[0].name };
    const wrapper = shallow(<App {...propsSuccess} />);

    const StatusBar = wrapper.find("StatusBar");
    expect(StatusBar.text()).toEqual(
      `Top 5 Stories for: ${propsSuccess.selectedCountry}`
    );

    const CountrySelectorPanel = wrapper.find("CountrySelectorPanel");
    expect(CountrySelectorPanel.length).toEqual(1);

    const TopStoriesPanel = wrapper.find("TopStoriesPanel");
    expect(TopStoriesPanel.length).toEqual(1);
  });
});
