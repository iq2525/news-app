import React from "react";
import PropTypes from "prop-types";
import CountryButton from "./CountryButton";
import styled from "styled-components";
import { COLOUR_LIGHT_GREY, BREAKPOINTS } from "../constants/styling";

const Section = styled.section`
  border: 1px solid ${COLOUR_LIGHT_GREY};
  border-radius: 5px;
`;

const Description = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  margin: 10px 5px;
`;

const AllButtonsContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
`;

const ButtonContainer = styled.div`
  box-sizing: border-box;
  min-width: 50%;
  padding: 5px;

  @media (min-width: ${BREAKPOINTS.medium}) {
    min-width: 20%;
  }
`;

const CountrySelectorPanel = ({ countries, isLoading, fetchStories }) => {
  return (
    <Section>
      <Description>
        Click a Country to see the Top 5 Stories from there below:
      </Description>
      <AllButtonsContainer>
        {countries.map((country, id) => (
          <ButtonContainer key={id}>
            <CountryButton
              key={id}
              country={country}
              isLoading={isLoading}
              fetchStories={fetchStories}
            />
          </ButtonContainer>
        ))}
      </AllButtonsContainer>
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
