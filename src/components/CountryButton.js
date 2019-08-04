import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  COLOUR_LIGHT_GREY,
  COLOUR_BLUE,
  COLOUR_BLACK,
  COLOUR_WHITE,
  COLOUR_LIGHT_BLUE
} from "../constants/styling";

const Button = styled.button`
  box-sizing: border-box;
  width: 50%;
  height: 50px;
  margin: 10px;
  border-radius: 5px;
  background-color: ${COLOUR_LIGHT_GREY};
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
`;
Button.displayName = "Button";

const CountryButton = ({ country, isLoading, fetchStories }) => {
  const countryCode = country.code;
  return (
    <Button
      disabled={isLoading}
      onClick={countryCode => fetchStories(country.code)}
    >
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
