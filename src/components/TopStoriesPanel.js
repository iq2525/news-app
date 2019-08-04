import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Story from "./Story";

const Container = styled.div`
  width: 100%;
  padding: 10px;
`;
Container.displayName = "Container";

const TopStoriesPanel = ({ stories, isLoading, isError }) => {
  let content;

  if (isError) {
    content = "Error. Please try again.";
  } else if (isLoading) {
    content = "Loading...";
  } else if (stories && stories.length) {
    content = stories.map((story, id) => <Story key={id} story={story} />);
  }

  return <Container>{content}</Container>;
};

TopStoriesPanel.propTypes = {
  stories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string,
      urlToImage: PropTypes.string
    })
  ),
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired
};

export default TopStoriesPanel;
