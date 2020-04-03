import { create } from '@storybook/theming/create';
import { addons } from '@storybook/addons';
import { libVersion, theme } from '../../src/settings';

const {
  ColorPrimary,
  ColorBlack,
  ColorAppBackground,
} = theme;

addons.setConfig({
  theme: create({
    base: 'light',
    colorPrimary: ColorPrimary,
    colorSecondary: ColorBlack,
    appBg: ColorAppBackground,
    appContentBg: ColorAppBackground,
    brandTitle: `<span style="color: ${ColorPrimary}; font-size: 16px; line-height: 1.5;">QNT React UI</span> <i>${libVersion}</i>`,
    brandUrl: '/',
    gridCellSize: 8,
  }),
});
