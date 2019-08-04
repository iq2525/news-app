import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Link = styled.a`
  width: 100%;
`;
Link.displayName = "Link";

const Title = styled.div`
  width: 300px;
`;
Title.displayName = "Title";

const Description = styled.div`
  width: 300px;
`;
Description.displayName = "Description";

const Story = ({ story }) => {
  return (
    <div>
      <Link href={story.url}>
        <Title>{story.title}</Title>
        <Description>{story.description}</Description>
        <div>
          <img src={story.urlToImage} alt={story.title} />
        </div>
      </Link>
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
