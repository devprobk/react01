import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Button from './Button';

export const primary = () => {
  const label = 'Colors';
  const options = {
    primary: 'red',
    seoncary: 'blue',
  };
  const defaultValue = 'red';
  const groupId = 'GROUP-ID01';
  const value = select(label, options, defaultValue, groupId);
  return <Button color={value}>Button primary</Button>;
};

export const secondary = () => <Button secondary>Button secondary</Button>;

export default {
  title: 'Button',
  decorators: [withKnobs],
};
