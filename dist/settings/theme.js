"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typographyKernings = exports.typographyLeadings = exports.typographyWeights = exports.typographySizes = exports.fontSizes = exports.colors = exports.layoutSpacings = exports.spacings = exports.libVersion = exports.appPrefix = void 0;
var appPrefix = 'qnt-ui';
exports.appPrefix = appPrefix;
var libVersion = 'v1.0.0';
exports.libVersion = libVersion;
var spacings = {
  Spacing1: '0.125rem',
  Spacing2: '0.25rem',
  Spacing3: '0.5rem',
  Spacing4: '0.75rem',
  Spacing5: '1rem',
  Spacing6: '1.25rem',
  Spacing7: '1.5rem',
  Spacing8: '1.75rem',
  Spacing9: '2rem',
  Spacing10: '2.25rem',
  Spacing11: '2.5rem',
  Spacing12: '2.75rem',
  Spacing13: '3rem',
  Spacing14: '3.25rem',
  Spacing15: '3.5rem',
  Spacing16: '3.75rem'
};
exports.spacings = spacings;
var layoutSpacings = {
  Layout1: '1rem',
  Layout2: '1.5rem',
  Layout3: '2rem',
  Layout4: '3rem',
  Layout5: '4rem',
  Layout6: '6rem',
  Layout7: '10rem'
};
exports.layoutSpacings = layoutSpacings;
var colors = {
  primary: {
    ColorFlamingoBase: '#EE4037',
    ColorTamarilloBase: '#9c1e17',
    ColorJetBase: '#33333f',
    ColorJetLighter: '#a7b6c2',
    ColorBlackBase: '#262626',
    ColorWhiteBase: '#ffffff'
  },
  rag: {
    red: {
      ColorRedBase: '#dc2f23',
      ColorRedDark: '#b5271d',
      ColorRedLight: '#eb8d87',
      ColorRedLighter: '#f8d9d7'
    },
    amber: {
      ColorAmberBase: '#ff9b3f',
      ColorAmberDark: '#cc7c32',
      ColorAmberLight: '#ffcd9f',
      ColorAmberLighter: '#fff0e2'
    },
    green: {
      ColorGreenBase: '#3ed483',
      ColorGreenDark: '#31a968',
      ColorGreenLight: '#9feac1',
      ColorGreenLighter: '#e2f8ec'
    },
    turquoise: {
      ColorTurquoiseBase: '#5acde9',
      ColorTurquoiseDark: '#4bafb1',
      ColorTurquoiseLight: '#ace6f4',
      ColorTurquoiseLighter: '#def5fa'
    },
    yellow: {
      ColorYellowBase: '#ffff00'
    }
  },
  disable: {
    ColorDisableBg: '#f0f0f1',
    ColorDisableFg: '#d6d6d8'
  }
};
exports.colors = colors;
var fontSizes = {
  h1: '2rem',
  h2: '1.5rem',
  h3: '1.17rem',
  h4: '1rem',
  h5: '0.83rem',
  h6: '0.67rem'
};
exports.fontSizes = fontSizes;
var typographySizes = {};
exports.typographySizes = typographySizes;
var typographyWeights = {
  TypographyWeightRegular: 100
};
exports.typographyWeights = typographyWeights;
var typographyLeadings = {};
exports.typographyLeadings = typographyLeadings;
var typographyKernings = {};
exports.typographyKernings = typographyKernings;