import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
  width: 300px;
`;
Button.displayName = "Button";

const CountryButton = ({ country, isLoading, fetchStories }) => {
  return (
    <Button disabled={isLoading} onClick={fetchStories(country.code)}>
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
