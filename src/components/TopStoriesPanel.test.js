import React from 'react';
import { shallow } from 'enzyme'

import TopStoriesPanel from './TopStoriesPanel'

describe('<TopStoriesPanel />', () => {
  it('renders component', () => {
    const wrapper = shallow(<TopStoriesPanel />)

    expect(wrapper.find('Story').length).toEqual(1)
  })
})