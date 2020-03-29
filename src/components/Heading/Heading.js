import React from 'react';
import { PropTypes } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import {
  StyledHeading1,
  StyledHeading2,
  StyledHeading3,
  StyledHeading4,
  StyledHeading5,
  StyledHeading6,
} from './styles/Heading.styles';
import { themeProps } from '../../settings';

const { classPrefix } = themeProps;

const types = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
};

const Heading = React.forwardRef(
  (
    {
      children,
      id,
      type = types.h3,
      ...rest
    },
    ref
  ) => {
    return (
      <ThemeProvider theme={{ type: type }}>
        { type === types.h1 &&
          <StyledHeading1
            id={id}
            className={`${classPrefix}-heading`}
          >
            <span className={`${classPrefix}-heading__label`}>{children}</span>
          </StyledHeading1>
        }

        { type === types.h2 &&
          <StyledHeading2
            id={id}
            className={`${classPrefix}-heading-h2`}
          >
            <span className={`${classPrefix}-heading--h2__label`}>{children}</span>
          </StyledHeading2>
        }

        { type === types.h3 &&
          <StyledHeading3
            id={id}
            className={`${classPrefix}-heading-h3`}
          >
            <span className={`${classPrefix}-heading--h3__label`}>{children}</span>
          </StyledHeading3>
        }

        { type === types.h4 &&
          <StyledHeading4
            id={id}
            className={`${classPrefix}-heading-h4`}
          >
            <span className={`${classPrefix}-heading--h4__label`}>{children}</span>
          </StyledHeading4>
        }

        { type === types.h5 &&
          <StyledHeading5
            id={id}
            className={`${classPrefix}-heading-h5`}
          >
            <span className={`${classPrefix}-heading--h5__label`}>{children}</span>
          </StyledHeading5>
        }

        { type === types.h6 &&
          <StyledHeading6
            id={id}
            className={`${classPrefix}-heading-h6`}
          >
            <span className={`${classPrefix}-heading--h6__label`}>{children}</span>
          </StyledHeading6>
        }
      </ThemeProvider>
    );
  },
);

Heading.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(types)),
}

export default Heading;
