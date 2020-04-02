import styled from 'styled-components';
import {
  spacings,
  appPrefix,
  typographyWeights,
  colors,
} from '../../../settings';

const { Spacing2 } = spacings;
const { TypographyWeightRegular } = typographyWeights;
const {
  primary: { ColorJetLighter },
  rag: { red: { ColorRedBase }, amber: { ColorAmberBase }, green: { ColorGreenDark } },
} = colors;

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
    color: ${ColorJetLighter};
  }

  &.${appPrefix}-label--warning {
    color: ${ColorAmberBase};
  }

  &.${appPrefix}-label--error {
    color: ${ColorRedBase};
  }

  &.${appPrefix}-label--success {
    color: ${ColorGreenDark};
  }
`;
