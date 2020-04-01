import styled from 'styled-components';
import theme from 'styled-theming';
import {
  appPrefix,
  spacings,
  fontSizes,
  typographyWeights,
  colors,
} from '../../../settings';

const { Spacing1, Spacing2, Spacing3, Spacing4 } = spacings;
const { h1, h2, h3, h4, h5, h6 } = fontSizes;
const { TypographyWeightRegular } = typographyWeights;
const { primary: { ColorJetBase } } = colors;

const margin = theme('type', {
  h1: `${Spacing4} 0`,
  h2: `${Spacing4} 0`,
  h3: `${Spacing3} 0`,
  h4: `${Spacing3} 0`,
  h5: `${Spacing2} 0`,
  h6: `${Spacing1} 0`,
});

const styleHeading = (elementMargin, fontSize) => `
  margin: ${elementMargin};
  font-size: ${fontSize};

  &.${appPrefix}-heading--italic {
    font-style: italic;
  }

  &.${appPrefix}-heading--assistive {
    font-style: italic;
    font-weight: ${TypographyWeightRegular};
    color: ${ColorJetBase};
  }
`;

export const StyledHeading1 = styled.h1`
  ${styleHeading(margin, h1)}
`;

export const StyledHeading2 = styled.h2`
  ${styleHeading(margin, h2)}
`;

export const StyledHeading3 = styled.h3`
  ${styleHeading(margin, h3)}
`;

export const StyledHeading4 = styled.h4`
  ${styleHeading(margin, h4)}
`;

export const StyledHeading5 = styled.h5`
  ${styleHeading(margin, h5)}
`;

export const StyledHeading6 = styled.h6`
  ${styleHeading(margin, h6)}
`;