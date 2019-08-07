import React from "react";
import { shallow } from "enzyme";
import { COUNTRIES } from "../constants/app";
import CountryButton from "./CountryButton";

const props = {
  country: COUNTRIES[0],
  isLoading: false,
  fetchStories: jest.fn()
};

describe("<CountrySelectorPanel />", () => {
  it("renders component", () => {
    const wrapper = shallow(<CountryButton {...props} />);

    const button = wrapper.find("Button");
    expect(button.length).toEqual(1);
    expect(button.text()).toEqual(props.country.name);
    expect(button.prop("disabled")).toEqual(false);
  });

  it("renders disabled when in loading state", () => {
    const props2 = { ...props, isLoading: true };
    const wrapper = shallow(<CountryButton {...props2} />);

    const button = wrapper.find("Button");
    expect(button.length).toEqual(1);
    expect(button.prop("disabled")).toEqual(true);
    expect(button.text()).toEqual(props.country.name);
  });

  it("should call fechStories when a Country button is clicked", () => {
    const propsWithMockFunction = { ...props, fetchStories: jest.fn() };
    const wrapper = shallow(<CountryButton {...propsWithMockFunction} />);

    const button = wrapper.find("Button");
    expect(button.length).toEqual(1);

    button.simulate("click");
    expect(propsWithMockFunction.fetchStories.mock.calls.length).toEqual(1);
    expect(propsWithMockFunction.fetchStories.mock.calls[0][0]).toEqual(
      props.country
    );
  });
});
