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

const propsTopStoriesPanel = {
  stories: ["Story 1", "Story 2", "Story 3", "Story 4", "Story 5"],
  isLoading: false
};

const propsTopStoriesPanelLoading = {
  stories: ["Story 1", "Story 2", "Story 3", "Story 4", "Story 5"],
  isLoading: true
};

storiesOf("CountrySelectorPanel", module)
  .add("default state", () => (
    <CountrySelectorPanel {...propsCountrySelectorPanel} />
  ))
  .add("loading state", () => (
    <CountrySelectorPanel {...propsCountrySelectorPanel2} />
  ));

storiesOf("TopStoriesPanel", module)
  .add("empty state", () => <TopStoriesPanel isLoading={false} />)
  .add("5 stories", () => <TopStoriesPanel {...propsTopStoriesPanel} />)
  .add("loading state", () => (
    <TopStoriesPanel {...propsTopStoriesPanelLoading} />
  ));
