import React from "react";
import { shallow } from "enzyme";

import CountrySelectorPanel from "./CountrySelectorPanel";

const props = {
  countries: [
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
  ],
  isLoading: false
};

describe("<CountrySelectorPanel />", () => {
  it("renders component", () => {
    const wrapper = shallow(<CountrySelectorPanel {...props} />);

    const buttons = wrapper.find("CountryButton");
    expect(buttons.length).toEqual(5);
    expect(buttons.at(0).text()).toEqual(props.countries[0].name);
    expect(buttons.at(1).text()).toEqual(props.countries[1].name);
    expect(buttons.at(2).text()).toEqual(props.countries[2].name);
    expect(buttons.at(3).text()).toEqual(props.countries[3].name);
    expect(buttons.at(4).text()).toEqual(props.countries[4].name);
  });

  it("renders loading state", () => {
    const props2 = { ...props, isLoading: true };
    const wrapper = shallow(<CountrySelectorPanel {...props2} />);

    const buttons = wrapper.find("CountryButton");
    expect(buttons.length).toEqual(5);
    expect(buttons.at(0).prop("disabled")).toEqual(true);
    expect(buttons.at(0).prop("disabled")).toEqual(true);
    expect(buttons.at(0).prop("disabled")).toEqual(true);
    expect(
      buttons
        .at(3)
        .at(0)
        .prop("disabled")
    ).toEqual(true);
    expect(
      buttons
        .at(4)
        .at(0)
        .prop("disabled")
    ).toEqual(true);
  });
});
