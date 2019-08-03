import React from "react";
import PropTypes from "prop-types";
import CountryButton from "./CountryButton";

const CountrySelectorPanel = ({ countries, isLoading, fetchStories }) => {
  return (
    <section>
      {countries.map((country, id) => (
        <CountryButton
          key={id}
          country={country}
          isLoading={isLoading}
          fetchStories={fetchStories}
        />
      ))}
    </section>
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
