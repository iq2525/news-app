import React from "react";
import PropTypes from "prop-types";

const Story = ({ story }) => {
  return (
    <div>
      <a href={story.url}>{story.title}</a>
      <img src={story.urlToImage} alt={story.title} />
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
