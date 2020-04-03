import styled from 'styled-components';
import { appPrefix, theme } from '../../../settings';

const {
  SizeH1,
  SizeH2,
  SizeH3,
  SizeH4,
  SizeH5,
  SizeH6,
  TypographyWeightRegular,
  ColorTextMuted,
  ColorHeading,
} = theme;

const styleHeading = (fontSize) => `
  font-size: ${fontSize};
  color: ${ColorHeading};

  &.${appPrefix}-heading--italic {
    font-style: italic;
  }

  &.${appPrefix}-heading--assistive {
    font-style: italic;
    font-weight: ${TypographyWeightRegular};
    color: ${ColorTextMuted};
  }
`;

export const StyledHeading1 = styled.h1`
  ${styleHeading(SizeH1)}
`;

export const StyledHeading2 = styled.h2`
  ${styleHeading(SizeH2)}
`;

export const StyledHeading3 = styled.h3`
  ${styleHeading(SizeH3)}
`;

export const StyledHeading4 = styled.h4`
  ${styleHeading(SizeH4)}
`;

export const StyledHeading5 = styled.h5`
  ${styleHeading(SizeH5)}
`;

export const StyledHeading6 = styled.h6`
  ${styleHeading(SizeH6)}
`;
