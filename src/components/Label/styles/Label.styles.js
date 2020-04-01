import styled from 'styled-components';
import {
  spacings,
  appPrefix,
  typographyWeights,
  colors,
} from '../../../settings';

const { Spacing2 } = spacings;
const { TypographyWeightRegular } = typographyWeights;
const { primary: { ColorJetBase } } = colors;

export const StyledLabel = styled.label`
  display: block;
  margin: ${Spacing2} 0;

  &.${appPrefix}-label--bold {
    font-weight: bold;
  }

  &.${appPrefix}-label--italic {
    font-style: italic;
  }

  &.${appPrefix}-label--assistive {
    font-style: italic;
    font-weight: ${TypographyWeightRegular};
    color: ${ColorJetBase};
  }
`;
