import React from "react";

import { storiesOf } from "@storybook/react";

import CountrySelectorPanel from "../components/CountrySelectorPanel";
import TopStoriesPanel from "../components/TopStoriesPanel";

const propsCountrySelectorPanel = {
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

const propsCountrySelectorPanel2 = {
  ...propsCountrySelectorPanel,
  isLoading: true
};

const propsTopStoriesPanel = ["Story 1", "Story 2"];

storiesOf("CountrySelectorPanel", module)
  .add("default state", () => (
    <CountrySelectorPanel {...propsCountrySelectorPanel} />
  ))
  .add("loading state", () => (
    <CountrySelectorPanel {...propsCountrySelectorPanel2} />
  ));

storiesOf("TopStoriesPanel", module)
  .add("empty state", () => <TopStoriesPanel />)
  .add("contains 2 stories", () => (
    <TopStoriesPanel {...propsTopStoriesPanel} />
  ));
