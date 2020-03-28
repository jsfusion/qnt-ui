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
    brandTitle: `<small style="color: #ee4037; font-weight: 600;">QNT Components ${libVersion}</small>`,
    brandUrl: '/',
    gridCellSize: 8,
  }),
});