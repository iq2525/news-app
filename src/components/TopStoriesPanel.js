import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  width: 100%;
  padding: 10px;
`;
Container.displayName = "Container";

const Story = styled.div`
  width: 100%;
  padding: 10px;
`;
Story.displayName = "Story";

const TopStoriesPanel = ({ stories, isLoading, isError }) => {
  let content;

  if (isError) {
    content = "Error. Please try again.";
  } else if (isLoading) {
    content = "Loading...";
  } else if (stories && stories.length) {
    content = stories.map((story, id) => <Story key={id}>{story}</Story>);
  }

  return <Container>{content}</Container>;
};

TopStoriesPanel.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.string),
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired
};

export default TopStoriesPanel;
