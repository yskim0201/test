import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '../06/Input';

storiesOf('Input', module)
  .add('기본 설정', () => <Input name="name" />)
  .add('label 예제', () => <Input name="name" label="이름" />)
  .add('성적 입력', () => <Input name="score" label="성적" type={Number} value={70} />);
