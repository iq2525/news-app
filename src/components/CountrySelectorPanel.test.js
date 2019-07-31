import React from 'react';
import { shallow } from 'enzyme'

import CountrySelectorPanel from './CountrySelectorPanel'

const props = {
  countries: [
    {
      name: 'Australia',
      code: 'au'
    },
    {
      name: 'France',
      code: 'fr'
    },
    {
      name: 'India',
      code: 'in'
    },
    {
      name: 'UK',
      code: 'au'
    },
    {
      name: 'USA',
      code: 'au'
    }
  ]
}

describe('<CountrySelectorPanel />', () => {
    it('renders component', () => {
      const wrapper = shallow(<CountrySelectorPanel {...props}/>)

      expect(wrapper.find('CountryButton').length).toEqual(5)
    })
})