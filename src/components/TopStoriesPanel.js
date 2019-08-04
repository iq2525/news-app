import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Story from "./Story";

const Container = styled.div`
  width: 100%;
  padding: 10px;
`;
Container.displayName = "Container";

const TopStoriesPanel = ({ stories }) => {
  return (
    <Container>
      {stories.map((story, id) => (
        <Story key={id} story={story} />
      ))}
    </Container>
  );
};

TopStoriesPanel.propTypes = {
  stories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string,
      urlToImage: PropTypes.string
    })
  )
};

export default TopStoriesPanel;
