import React from 'react';
import { addParameters, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import Container from './container';

addDecorator(withA11y);
addDecorator(story => <Container story={story} />);

addParameters({
  options: {
    showRoots: true,
  },
});