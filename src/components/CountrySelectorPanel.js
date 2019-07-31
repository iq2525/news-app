import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CountryButton = styled.button`
  width: 300px;
`
CountryButton.displayName = 'CountryButton'

const CountrySelectorPanel = ({ countries }) => {
  return (
  <div>
    {countries.map((country, id) => <CountryButton key={id}>{country.name}</CountryButton>)}
  </div>
  )
}

CountrySelectorPanel.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      code: PropTypes.string
    })
  ).isRequired,
}

export default CountrySelectorPanel