import styled from 'styled-components';
import { appPrefix, theme } from '../../../settings';

const { Spacing2, TypographyWeightRegular, ColorTextMuted } = theme;

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
    color: ${ColorTextMuted};
  }

  &.${appPrefix}-paragraph--justify {
    text-align: justify;
  }
`;
