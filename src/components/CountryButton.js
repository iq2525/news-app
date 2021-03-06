import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  COLOUR_LIGHT_GREY,
  COLOUR_BLUE,
  COLOUR_BLACK,
  COLOUR_WHITE,
  COLOUR_LIGHT_BLUE,
  COLOUR_LIGHT_BLUE_2
} from "../constants/styling";

const Button = styled.button`
  box-sizing: border-box;
  height: 50px;
  width: 100%;
  border-radius: 5px;
  background-color: ${COLOUR_LIGHT_BLUE_2};
  color: ${COLOUR_BLACK};
  font-weight: bold;
  font-size: 13px;
  cursor: pointer;

  &:hover {
    color: ${COLOUR_WHITE};
    background-color: ${COLOUR_BLUE};
  }

  &:active {
    color: ${COLOUR_WHITE};
    background-color: ${COLOUR_LIGHT_BLUE};
  }

  &:disabled {
    color: ${COLOUR_WHITE};
    background-color: ${COLOUR_LIGHT_GREY};
  }
`;
Button.displayName = "Button";

const CountryButton = ({ country, isLoading, fetchStories }) => {
  const countryRef = country;
  return (
    <Button disabled={isLoading} onClick={country => fetchStories(countryRef)}>
      {country.name}
    </Button>
  );
};

CountryButton.propTypes = {
  country: PropTypes.exact({
    name: PropTypes.string,
    code: PropTypes.string
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
  fetchStories: PropTypes.func.isRequired
};

export default CountryButton;
