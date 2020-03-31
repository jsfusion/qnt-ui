import React from 'react';
import styled from 'styled-components';
import { colors } from '../settings';

const {
  black: {ColorBlackBase},
  white: {ColorWhiteBase},
  red: {ColorRedDark},
  jet: {ColorJetBase},
  green: {ColorGreenDark}
} = colors;

const StyledStoryTag = styled.div`
  display: inline-block;
  overflow: hidden;
  color: ${ColorWhiteBase};
  border: 1px solid ${props => (props.isWarning ? ColorRedDark : props.isActive ? ColorGreenDark : ColorJetBase)};
  border-radius: 50px;
  background: ${props => (props.isWarning ? ColorRedDark : props.isActive ? ColorGreenDark : ColorJetBase)};
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
    color: ${ColorBlackBase};
    background: ${ColorWhiteBase};
  }

  &:hover {
    pointer-events: ${props => (props.isWarning || props.isActive ? 'none' : 'normal')};
    background: ${props => (props.isWarning ? ColorRedDark : props.isActive ? ColorGreenDark : ColorJetBase)};
    border-color: ${props =>
      props.isWarning ? ColorRedDark : props.isActive ? ColorGreenDark : ColorJetBase};
    text-decoration: none;
    color: ${ColorWhiteBase};

    span {
      color: ${ColorBlackBase};
    }
  }
`;

const StoryTag = ({ link, title, children, isWarning, isActive }) => {
  return (
    <StyledStoryTag
      as={link && 'a'}
      href={link}
      target="_blank"
      isWarning={isWarning}
      isActive={isActive}
    >
      {title}
      <span>{children}</span>
    </StyledStoryTag>
  );
};

export default StoryTag;
