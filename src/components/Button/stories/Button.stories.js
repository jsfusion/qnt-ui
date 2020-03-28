import React from 'react';
import Button from '..';

export default {
  title: 'App Components|Button',
  parameters: {
    component: Button,
  },
};

export const Usage = () => (
  <div>
    <Button size='small' varient='primary'>Small Button</Button>
    <Button size='medium' varient='secondary'>Medium Button</Button>
    <Button size='large' varient='tertiary'>Large Button</Button>
  </div>
);
