import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Description = styled.button`
  width: 300px;
`;
Description.displayName = "Description";

const Story = ({ story }) => {
  return (
    <div>
      <div>
        <a href={story.url}>{story.title}</a>
      </div>
      <Description>{story.description}</Description>
      <div>
        <img src={story.urlToImage} alt={story.title} />
      </div>
    </div>
  );
};

Story.propTypes = PropTypes.shape({
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  urlToImage: PropTypes.string
}).isRequired;

export default Story;
