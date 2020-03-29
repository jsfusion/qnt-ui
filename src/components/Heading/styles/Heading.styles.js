import styled from 'styled-components';
import theme from 'styled-theming';
import { spacings, fontSizes } from '../../../settings';

const { spacing1, spacing2, spacing3, spacing4 } = spacings;
const { h1, h2, h3, h4, h5, h6 } = fontSizes;

const margin = theme('type', {
  h1: `${spacing4} 0`,
  h2: `${spacing4} 0`,
  h3: `${spacing3} 0`,
  h4: `${spacing3} 0`,
  h5: `${spacing2} 0`,
  h6: `${spacing1} 0`,
});

export const StyledHeading1 = styled.h1`
  margin: ${margin};
  font-size: ${h1};
`;

export const StyledHeading2 = styled.h2`
  margin: ${margin};
  font-size: ${h2};
`;

export const StyledHeading3 = styled.h3`
  margin: ${margin};
  font-size: ${h3};
`;

export const StyledHeading4 = styled.h4`
  margin: ${margin};
  font-size: ${h4};
`;

export const StyledHeading5 = styled.h5`
  margin: ${margin};
  font-size: ${h5};
`;

export const StyledHeading6 = styled.h6`
  margin: ${margin};
  font-size: ${h6};
`;