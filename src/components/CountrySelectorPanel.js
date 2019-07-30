import React from 'react'
import styled from 'styled-components'

const CountryButton = styled.button`
  width: 300px;
`
CountryButton.displayName = 'CountryButton'

const CountrySelectorPanel = () => {
  return (
  <div>
      <CountryButton>Australia</CountryButton>
      <CountryButton>France</CountryButton>
      <CountryButton>India</CountryButton>
      <CountryButton>UK</CountryButton>
      <CountryButton>USA</CountryButton>
  </div>
  )
}

export default CountrySelectorPanel