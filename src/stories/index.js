import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import CountrySelectorPanel from '../components/CountrySelectorPanel'
import TopStoriesPanel from '../components/TopStoriesPanel'

storiesOf('CountrySelectorPanel', module)
  .add('default state', () => <CountrySelectorPanel />)

storiesOf('TopStoriesPanel', module)
  .add('default state', () => <TopStoriesPanel />)

