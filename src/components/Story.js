import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  COLOUR_LIGHT_GREY,
  COLOUR_GREY,
  COLOUR_LIGHT_BLUE,
  COLOUR_PURPLE
} from "../constants/styling";

const Link = styled.a`
  border-bottom: 1px solid ${COLOUR_GREY};
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  box-sizing: border-box;
  text-decoration: none;
  font-size: 12px;
  line-height 14px;

  :hover {
    background-color: ${COLOUR_LIGHT_GREY};
  }
`;
Link.displayName = "Link";

const ImageContainer = styled.div`
  margin: 10px;
  width: 50%;
`;
ImageContainer.displayName = "ImageContainer";

const Content = styled.div`
  margin: 10px;
  width: 50%;
`;
Content.displayName = "Content";

const Image = styled.img`
  width: 100%;
`;
Image.displayName = "Image";

const Title = styled.div`
  margin-bottom: 5px;
  font-size: 14px;
  line-height 16px;

  ${Link}:hover & {
    text-decoration: underline;
    color: ${COLOUR_LIGHT_BLUE};
  }

  ${Link}:visited & {
    color: ${COLOUR_PURPLE};
  }
`;
Title.displayName = "Title";

const Description = styled.div`
  color: #000;
  text-decoration: none;
`;
Description.displayName = "Description";

const Story = ({ story }) => {
  return (
    <Link href={story.url}>
      <ImageContainer>
        <Image src={story.urlToImage} alt={story.title} />
      </ImageContainer>
      <Content>
        <Title>{story.title}</Title>
        <Description>{story.description}</Description>
      </Content>
    </Link>
  );
};

Story.propTypes = PropTypes.shape({
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  urlToImage: PropTypes.string
}).isRequired;

export default Story;
