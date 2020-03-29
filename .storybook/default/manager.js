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
    brandTitle: `<span style="color: #ee4037; font-weight: 600;">QNT UI ${libVersion}</span>`,
    brandUrl: 'https://github.com/shubham-thakare/qnt-ui',
    gridCellSize: 8,
  }),
});