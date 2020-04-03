import React from 'react';
import styled from 'styled-components';
import { theme } from '../settings';

const {
  ColorPrimary,
  ColorSuccess,
  ColorDanger,
  ColorWhite,
  ColorBlack,
} = theme;

const StyledTag = styled.div`
  display: inline-block;
  overflow: hidden;
  color: ${ColorWhite};
  border: 1px solid
    ${(props) =>
      props.isWarning
        ? ColorDanger
        : props.isActive
        ? ColorSuccess
        : ColorPrimary};
  border-radius: 5px;
  background: ${(props) =>
    props.isWarning
      ? ColorDanger
      : props.isActive
      ? ColorSuccess
      : ColorPrimary};
  padding-left: 8px;
  font-size: 12px;
  vertical-align: middle;
  line-height: 1;
  font-weight: bold;
  margin: 0 8px 16px 0;
  position: relative;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  text-decoration: none;

  span {
    display: inline-block;
    padding: 4px 8px;
    font-weight: 400;
    margin-left: 8px;
    color: ${ColorBlack};
    background: ${ColorWhite};
  }

  &:hover {
    pointer-events: ${(props) =>
      props.isWarning || props.isActive ? 'none' : 'normal'};
    background: ${(props) =>
      props.isWarning
        ? ColorDanger
        : props.isActive
        ? ColorSuccess
        : ColorPrimary};
    border-color: ${(props) =>
      props.isWarning
        ? ColorDanger
        : props.isActive
        ? ColorSuccess
        : ColorPrimary};
    text-decoration: none;
    color: ${ColorWhite};

    span {
      color: ${ColorBlack};
    }
  }
`;

const StoryTag = ({ link, title, children, isWarning, isActive }) => {
  return (
    <StyledTag
      as={link && 'a'}
      href={link}
      target="_blank"
      isWarning={isWarning}
      isActive={isActive}
    >
      {title}
      <span>{children}</span>
    </StyledTag>
  );
};

export default Tag;
