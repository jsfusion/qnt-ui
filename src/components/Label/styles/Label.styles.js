import styled from 'styled-components';
import { appPrefix, theme } from '../../../settings';

const {
  Spacing2,
  TypographyWeightRegular,
  ColorTextMuted,
  ColorDanger,
  ColorWarning,
  ColorSuccess,
} = theme;

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
    color: ${ColorTextMuted};
  }

  &.${appPrefix}-label--warning {
    color: ${ColorWarning};
  }

  &.${appPrefix}-label--error {
    color: ${ColorDanger};
  }

  &.${appPrefix}-label--success {
    color: ${ColorSuccess};
  }
`;
