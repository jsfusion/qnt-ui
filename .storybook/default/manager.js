import { create } from '@storybook/theming/create';
import { addons } from '@storybook/addons';
import { libVersion } from '../../src/settings';

addons.setConfig({
  theme: create({
    base: 'light',
    colorPrimary: '#ee4037',
    colorSecondary: '#5743d6',
    appBg: '#ffffff',
    appContentBg: '#ffffff',
    brandTitle: `Custom components <small style="color: #3c4edd; font-weight: 600;margin-left: 4px;">${libVersion}</small><br /><small><span style="font-weight: 300">from</span> QNT Components</small>`,
    brandUrl: '/',
    gridCellSize: 8,
  }),
});