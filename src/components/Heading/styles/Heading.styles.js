import styled from 'styled-components';
import theme from 'styled-theming';
import { rem } from 'polished';

const margin = theme('type', {
  h1: `${rem('20px')} ${rem('0px')}`,
  h2: `${rem('18px')} ${rem('0px')}`,
  h3: `${rem('16px')} ${rem('0px')}`,
  h4: `${rem('12px')} ${rem('0px')}`,
  h5: `${rem('8px')} ${rem('0px')}`,
  h6: `${rem('4px')} ${rem('0px')}`,
});

export const StyledHeading1 = styled.h1`
  margin: ${margin};
`;

export const StyledHeading2 = styled.h2`
  margin: ${margin};
`;

export const StyledHeading3 = styled.h3`
  margin: ${margin};
`;

export const StyledHeading4 = styled.h4`
  margin: ${margin};
`;

export const StyledHeading5 = styled.h5`
  margin: ${margin};
`;

export const StyledHeading6 = styled.h6`
  margin: ${margin};
`;