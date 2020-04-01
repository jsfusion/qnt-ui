import React from 'react';
import { PropTypes } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import cx from 'classnames';
import {
  StyledHeading1,
  StyledHeading2,
  StyledHeading3,
  StyledHeading4,
  StyledHeading5,
  StyledHeading6,
} from './styles/Heading.styles';
import { appPrefix } from '../../settings';

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
      className: customClassName,
      id,
      type = types.h3,
      isItalic = false,
      isAssistive = false,
      ...rest
    },
    ref
  ) => {
    const className = cx({
      [`${appPrefix}-heading-${type}`]: true,
      [`${appPrefix}-heading--italic`]: isItalic,
      [`${appPrefix}-heading--assistive`]: isAssistive,
      [customClassName]: !!customClassName,
    });

    return (
      <ThemeProvider theme={{ type: type }}>
        { type === types.h1 &&
          <StyledHeading1
            id={id}
            className={className}
            ref={ref}
            {...rest}
          >
            {children}
          </StyledHeading1>
        }

        { type === types.h2 &&
          <StyledHeading2
            id={id}
            className={className}
            ref={ref}
            {...rest}
          >
            {children}
          </StyledHeading2>
        }

        { type === types.h3 &&
          <StyledHeading3
            id={id}
            className={className}
            ref={ref}
            {...rest}
          >
            {children}
          </StyledHeading3>
        }

        { type === types.h4 &&
          <StyledHeading4
            id={id}
            className={className}
            ref={ref}
            {...rest}
          >
            {children}
          </StyledHeading4>
        }

        { type === types.h5 &&
          <StyledHeading5
            id={id}
            className={className}
            ref={ref}
            {...rest}
          >
            {children}
          </StyledHeading5>
        }

        { type === types.h6 &&
          <StyledHeading6
            id={id}
            className={className}
            ref={ref}
            {...rest}
          >
            {children}
          </StyledHeading6>
        }
      </ThemeProvider>
    );
  },
);

Heading.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(types)),
  isItalic: PropTypes.bool,
  isAssistive: PropTypes.bool,
}

export default Heading;
