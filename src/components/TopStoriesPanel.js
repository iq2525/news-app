import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Story = styled.div`
  width: 100%;
  padding: 10px;
`
Story.displayName = 'Story'

const TopStoriesPanel = ({ stories }) => {
  return (
  <div>
      {stories && 
        stories.map((story, id) => <Story key={id}>{story}</Story>)
      }
  </div>
  )
}

TopStoriesPanel.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.string)
}

export default TopStoriesPanel