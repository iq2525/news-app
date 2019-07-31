import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

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
  ]
};

const propsTopStoriesPanel = ["Story 1", "Story 2"];

storiesOf("CountrySelectorPanel", module).add("default state", () => (
  <CountrySelectorPanel {...propsCountrySelectorPanel} />
));

storiesOf("TopStoriesPanel", module)
  .add("empty state", () => <TopStoriesPanel />)
  .add("contains 2 stories", () => (
    <TopStoriesPanel {...propsTopStoriesPanel} />
  ));
