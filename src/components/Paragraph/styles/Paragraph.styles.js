import styled from 'styled-components';
import {
  appPrefix,
  spacings,
  typographyWeights,
  colors,
} from '../../../settings';

const { Spacing2 } = spacings;
const { TypographyWeightRegular } = typographyWeights;
const { primary: { ColorJetLighter } } = colors;

export const StyledParagraph = styled.p`
  display: block;
  margin: ${Spacing2} 0;

  &.${appPrefix}-paragraph--bold {
    font-weight: bold;
  }

  &.${appPrefix}-paragraph--italic {
    font-style: italic;
  }

  &.${appPrefix}-paragraph--assistive {
    font-style: italic;
    font-weight: ${TypographyWeightRegular};
    color: ${ColorJetLighter};
  }

  &.${appPrefix}-paragraph--justify {
    text-align: justify;
  }
`;
