import React from "react";
import PropTypes from "prop-types";
import CountryButton from "./CountryButton";
import styled from "styled-components";
import { COLOUR_LIGHT_GREY } from "../constants/styling";

const Section = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid ${COLOUR_LIGHT_GREY};
  border-radius: 5px;
`;

const ButtonContainer = styled.div`
  box-sizing: border-box;
  min-width: 50%;
  padding: 2px;
`;

const CountrySelectorPanel = ({ countries, isLoading, fetchStories }) => {
  return (
    <Section>
      {countries.map((country, id) => (
        <ButtonContainer>
          <CountryButton
            key={id}
            country={country}
            isLoading={isLoading}
            fetchStories={fetchStories}
          />
        </ButtonContainer>
      ))}
    </Section>
  );
};

CountrySelectorPanel.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      code: PropTypes.string
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default CountrySelectorPanel;
