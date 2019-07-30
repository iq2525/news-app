import React from 'react';
import { shallow } from 'enzyme'

import CountrySelectorPanel from './CountrySelectorPanel'

describe('<CountrySelectorPanel />', () => {
    it('renders component', () => {
      const wrapper = shallow(<CountrySelectorPanel/>)

      expect(wrapper.find('CountryButton').length).toEqual(5)
    })
})