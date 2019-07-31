import React from 'react';
import { shallow } from 'enzyme'

import TopStoriesPanel from './TopStoriesPanel'

const props = {
  stories: ['Story 1', 'Story 2',]
}

describe('<TopStoriesPanel />', () => {
  it('renders component with no stories', () => {
    const wrapper = shallow(<TopStoriesPanel />)

    expect(wrapper.find('Story').length).toEqual(0)
  })

  it('renders component with 2 stories', () => {
    const wrapper = shallow(<TopStoriesPanel {...props}/>)

    expect(wrapper.find('Story').length).toEqual(2)
  })
})