import { create } from '@storybook/theming/create';
import { addons } from '@storybook/addons';
import { libVersion, colors } from '../../src/settings';

const { ColorFlamingoBase, ColorTamarilloBase, ColorWhiteBase } = colors.primary;

addons.setConfig({
  theme: create({
    base: 'light',
    colorPrimary: ColorFlamingoBase,
    colorSecondary: ColorTamarilloBase,
    appBg: ColorWhiteBase,
    appContentBg: ColorWhiteBase,
    brandTitle: `<span style="color: ${ColorFlamingoBase}; font-weight: 600;">QNT UI ${libVersion}</span>`,
    brandUrl: '/',
    gridCellSize: 8,
  }),
});