import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import CountrySelectorPanel from '../components/CountrySelectorPanel'

storiesOf('CountrySelectorPanel', module)
  .add('default state', () => <CountrySelectorPanel />)
