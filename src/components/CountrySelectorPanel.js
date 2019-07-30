import React from 'react'
import styled from 'styled-components'

const Select = styled.select`
  width: 300px;
`
Select.displayName = 'Select'

const CountrySelectorPanel = () => {
  return (
  <div>
      <div>
        <Select />
      </div>
  </div>
  )
}

export default CountrySelectorPanel