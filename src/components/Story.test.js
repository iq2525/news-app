import React from "react";
import { shallow } from "enzyme";

import Story from "./Story";

const props = {
  title: "Story 1",
  description: "Description 1",
  url: "http://test.com",
  urlToImage: "http://test.com/image.jpg"
};

describe("<Story />", () => {
  it("renders component", () => {
    const story = shallow(<Story story={props} />);

    expect(story.length).toEqual(1);
    expect(story.find("a").length).toEqual(1);
    expect(story.find("a").prop("href")).toEqual(props.url);
    expect(story.find("a").text()).toEqual(props.title);
    expect(story.find("Description").text()).toEqual(props.description);
    expect(story.find("img").length).toEqual(1);
    expect(story.find("img").prop("src")).toEqual(props.urlToImage);
  });
});
