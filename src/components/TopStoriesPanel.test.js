import React from "react";
import { shallow } from "enzyme";

import TopStoriesPanel from "./TopStoriesPanel";

const props = {
  stories: ["Story 1", "Story 2", "Story 3", "Story 4", "Story 5"],
  isLoading: false
};

describe("<TopStoriesPanel />", () => {
  it("renders component with no stories", () => {
    const wrapper = shallow(<TopStoriesPanel isLoading={false} />);

    expect(wrapper.find("Story").length).toEqual(0);
  });

  it("renders component with 5 stories", () => {
    const wrapper = shallow(<TopStoriesPanel {...props} />);

    const stories = wrapper.find("Story");
    expect(stories.length).toEqual(5);
    expect(stories.at(0).text()).toEqual(props.stories[0]);
    expect(stories.at(1).text()).toEqual(props.stories[1]);
    expect(stories.at(2).text()).toEqual(props.stories[2]);
    expect(stories.at(3).text()).toEqual(props.stories[3]);
    expect(stories.at(4).text()).toEqual(props.stories[4]);
  });

  it("renders component with loading state", () => {
    const propsLoading = { ...props, isLoading: true };
    const wrapper = shallow(<TopStoriesPanel {...propsLoading} />);

    const stories = wrapper.find("Story");
    expect(stories.length).toEqual(0);
  });
});
