import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import CountrySelectorPanel from "../components/CountrySelectorPanel";
import TopStoriesPanel from "../components/TopStoriesPanel";
import CountryButton from "../components/CountryButton";
import Story from "../components/Story";
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

storiesOf("TopStoriesPanel", module).add("5 stories", () => (
  <TopStoriesPanel
    stories={[
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        description:
          "Morbi auctor nisi augue, in iaculis lectus ullamcorper ut. Aliquam in ultricies diam, eu mattis orci. Praesent eu ligula lectus. Quisque pretium quam in nulla porta, eget consequat erat bibendum. Ut a orci sapien. Integer cursus scelerisque quam ac tempor",
        url: "http://test.com",
        urlToImage: "http://via.placeholder.com/600x400"
      },
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        description:
          "Morbi auctor nisi augue, in iaculis lectus ullamcorper ut. Aliquam in ultricies diam, eu mattis orci. Praesent eu ligula lectus. Quisque pretium quam in nulla porta, eget consequat erat bibendum. Ut a orci sapien. Integer cursus scelerisque quam ac tempor",
        url: "http://test.com",
        urlToImage: "http://via.placeholder.com/600x400"
      },
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        description:
          "Morbi auctor nisi augue, in iaculis lectus ullamcorper ut. Aliquam in ultricies diam, eu mattis orci. Praesent eu ligula lectus. Quisque pretium quam in nulla porta, eget consequat erat bibendum. Ut a orci sapien. Integer cursus scelerisque quam ac tempor",
        url: "http://test.com",
        urlToImage: "http://via.placeholder.com/600x400"
      },
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        description:
          "Morbi auctor nisi augue, in iaculis lectus ullamcorper ut. Aliquam in ultricies diam, eu mattis orci. Praesent eu ligula lectus. Quisque pretium quam in nulla porta, eget consequat erat bibendum. Ut a orci sapien. Integer cursus scelerisque quam ac tempor",
        url: "http://test.com",
        urlToImage: "http://via.placeholder.com/600x400"
      },
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        description:
          "Morbi auctor nisi augue, in iaculis lectus ullamcorper ut. Aliquam in ultricies diam, eu mattis orci. Praesent eu ligula lectus. Quisque pretium quam in nulla porta, eget consequat erat bibendum. Ut a orci sapien. Integer cursus scelerisque quam ac tempor",
        url: "http://test.com",
        urlToImage: "http://via.placeholder.com/600x400"
      }
    ]}
  />
));

storiesOf("Story", module).add("render story", () => (
  <Story
    story={{
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      description:
        "Morbi auctor nisi augue, in iaculis lectus ullamcorper ut. Aliquam in ultricies diam, eu mattis orci. Praesent eu ligula lectus. Quisque pretium quam in nulla porta, eget consequat erat bibendum. Ut a orci sapien. Integer cursus scelerisque quam ac tempor",
      url: "http://test.com",
      urlToImage: "http://via.placeholder.com/600x400"
    }}
  />
));
