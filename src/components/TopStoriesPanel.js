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

const TopStoriesPanel = ({ stories, isLoading }) => {
  return (
    <Container>
      {isLoading
        ? "Loading..."
        : stories &&
          stories.map((story, id) => <Story key={id}>{story}</Story>)}
    </Container>
  );
};

TopStoriesPanel.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.string),
  isLoading: PropTypes.bool.isRequired
};

export default TopStoriesPanel;
