import React from 'react';
import { storiesOf } from '@storybook/react';
import Quiz from '../06/Quiz';

storiesOf('Quiz', module).add('과제', () => (
  <>
    <h1>이름과 전공</h1>
    <Quiz name="name" major="major" />
  </>
));
