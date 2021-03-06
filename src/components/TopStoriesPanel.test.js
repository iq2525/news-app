import React from "react";
import { shallow } from "enzyme";

import TopStoriesPanel from "./TopStoriesPanel";

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
      urlToImage: "http://test.com/image.jpg/2"
    },
    {
      title: "Story 3",
      description: "Description 3",
      url: "http://test.com/3",
      urlToImage: "http://test.com/image3.jpg"
    },
    {
      title: "Story 4",
      description: "Description 4",
      url: "http://test.com/4",
      urlToImage: "http://test.com/image4.jpg"
    },
    {
      title: "Story 5",
      description: "Description 5",
      url: "http://test.com/5",
      urlToImage: "http://test.com/image5.jpg"
    }
  ],
  isLoading: false,
  isError: false
};

describe("<TopStoriesPanel />", () => {
  it("renders component with 5 stories", () => {
    const wrapper = shallow(<TopStoriesPanel {...props} />);

    const stories = wrapper.find("Story");

    expect(stories.length).toEqual(5);
    expect(stories.at(0).prop("story")).toEqual(props.stories[0]);
    expect(stories.at(1).prop("story")).toEqual(props.stories[1]);
    expect(stories.at(2).prop("story")).toEqual(props.stories[2]);
    expect(stories.at(3).prop("story")).toEqual(props.stories[3]);
    expect(stories.at(4).prop("story")).toEqual(props.stories[4]);
  });
});
