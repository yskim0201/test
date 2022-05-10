import React from 'react';
import { storiesOf } from '@storybook/react';

import BooleanComponent from '../04/4_2';

storiesOf('BooleanComponent', module)
  .add('기본 설정', () => <BooleanComponent />)
  .add('bored 설정', () => <BooleanComponent bored />);
