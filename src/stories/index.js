import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import CountrySelectorPanel from "../components/CountrySelectorPanel";
import TopStoriesPanel from "../components/TopStoriesPanel";
import CountryButton from "../components/CountryButton";
import { COUNTRIES } from "../constants/app";

const propsCountrySelectorPanel = {
  countries: COUNTRIES,
  isLoading: false,
  fetchStories: () => {}
};

const propsCountrySelectorPanel2 = {
  ...propsCountrySelectorPanel,
  isLoading: true
};

const propsTopStoriesPanel = {
  stories: ["Story 1", "Story 2", "Story 3", "Story 4", "Story 5"],
  isLoading: false,
  isError: false
};

const propsTopStoriesPanelLoading = {
  stories: ["Story 1", "Story 2", "Story 3", "Story 4", "Story 5"],
  isLoading: true,
  isError: false
};

const propsTopStoriesPanelError = {
  stories: [],
  isLoading: false,
  isError: true
};

storiesOf("CountrySelectorPanel", module)
  .add("default state", () => (
    <CountrySelectorPanel {...propsCountrySelectorPanel} />
  ))
  .add("loading state", () => (
    <CountrySelectorPanel {...propsCountrySelectorPanel2} />
  ));

storiesOf("CountryButton", module)
  .add("default state", () => (
    <CountryButton
      country={COUNTRIES[0]}
      isLoading={false}
      fetchStories={action("clicked")}
    />
  ))
  .add("loading state", () => (
    <CountryButton
      country={COUNTRIES[0]}
      isLoading={true}
      fetchStories={action("clicked")}
    />
  ));

storiesOf("TopStoriesPanel", module)
  .add("empty state", () => <TopStoriesPanel isLoading={false} />)
  .add("5 stories", () => <TopStoriesPanel {...propsTopStoriesPanel} />)
  .add("loading state", () => (
    <TopStoriesPanel {...propsTopStoriesPanelLoading} />
  ))
  .add("error state", () => <TopStoriesPanel {...propsTopStoriesPanelError} />);
