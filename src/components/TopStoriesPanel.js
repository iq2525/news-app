import React from 'react'
import styled from 'styled-components'

const Story = styled.div`
  width: 100%;
  padding: 10px;
`
Story.displayName = 'Story'

const TopStoriesPanel = () => {
  return (
  <div>
      <Story>Story 1</Story>
  </div>
  )
}

export default TopStoriesPanel