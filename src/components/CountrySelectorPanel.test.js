import React from "react";
import { shallow } from "enzyme";
import { COUNTRIES } from "../constants/app";
import CountrySelectorPanel from "./CountrySelectorPanel";

const props = {
  countries: COUNTRIES,
  isLoading: false,
  fetchStories: jest.fn()
};

describe("<CountrySelectorPanel />", () => {
  it("renders component with 5 country buttons", () => {
    const wrapper = shallow(<CountrySelectorPanel {...props} />);

    const buttons = wrapper.find("CountryButton");
    expect(buttons.length).toEqual(5);

    expect(buttons.at(0).prop("country")).toEqual(COUNTRIES[0]);
    expect(buttons.at(0).prop("isLoading")).toEqual(props.isLoading);
    expect(buttons.at(0).prop("fetchStories")).toEqual(props.fetchStories);

    expect(buttons.at(1).prop("country")).toEqual(COUNTRIES[1]);
    expect(buttons.at(1).prop("isLoading")).toEqual(props.isLoading);
    expect(buttons.at(1).prop("fetchStories")).toEqual(props.fetchStories);

    expect(buttons.at(2).prop("country")).toEqual(COUNTRIES[2]);
    expect(buttons.at(2).prop("isLoading")).toEqual(props.isLoading);
    expect(buttons.at(2).prop("fetchStories")).toEqual(props.fetchStories);

    expect(buttons.at(3).prop("country")).toEqual(COUNTRIES[3]);
    expect(buttons.at(3).prop("isLoading")).toEqual(props.isLoading);
    expect(buttons.at(3).prop("fetchStories")).toEqual(props.fetchStories);

    expect(buttons.at(4).prop("country")).toEqual(COUNTRIES[4]);
    expect(buttons.at(4).prop("isLoading")).toEqual(props.isLoading);
    expect(buttons.at(4).prop("fetchStories")).toEqual(props.fetchStories);
  });

  it("renders component with 5 country buttons in loading state", () => {
    const propsLoading = { ...props, isLoading: true };

    const wrapper = shallow(<CountrySelectorPanel {...propsLoading} />);

    const buttons = wrapper.find("CountryButton");
    expect(buttons.length).toEqual(5);
    expect(buttons.at(0).prop("isLoading")).toEqual(true);
    expect(buttons.at(1).prop("isLoading")).toEqual(true);
    expect(buttons.at(2).prop("isLoading")).toEqual(true);
    expect(
      buttons
        .at(3)
        .at(0)
        .prop("isLoading")
    ).toEqual(true);
    expect(
      buttons
        .at(4)
        .at(0)
        .prop("isLoading")
    ).toEqual(true);
  });

  it("should set 'fechStories' prop on each Country button", () => {
    const propsWithMockFunction = { ...props, fetchStories: jest.fn() };
    const wrapper = shallow(
      <CountrySelectorPanel {...propsWithMockFunction} />
    );

    const buttons = wrapper.find("CountryButton");
    expect(buttons.length).toEqual(5);

    buttons.at(0).prop("fetchStories");
    expect(buttons.at(0).prop("fetchStories")).toEqual(
      propsWithMockFunction.fetchStories
    );
    expect(buttons.at(1).prop("fetchStories")).toEqual(
      propsWithMockFunction.fetchStories
    );
    expect(buttons.at(2).prop("fetchStories")).toEqual(
      propsWithMockFunction.fetchStories
    );
    expect(buttons.at(3).prop("fetchStories")).toEqual(
      propsWithMockFunction.fetchStories
    );
    expect(buttons.at(4).prop("fetchStories")).toEqual(
      propsWithMockFunction.fetchStories
    );
  });
});
