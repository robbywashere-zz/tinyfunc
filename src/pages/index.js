import React from "react";
import styled, { keyframes } from "styled-components";
import { Box, Flex, Avatar, Banner, Heading } from "rebass";
import { fontSize, themeGet } from "styled-system";
import { CommentIconLocal, PaperclipIconLocal, CodeIconLocal, PhoneIcon, GithubIcon } from "../components/Icons";
import media from '../styles/media';

//https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items
const Me = Avatar.extend``;

const blinkAnimation = ({speed=1})=>`animation: ${keyframes`
  50% {
    visibility: hidden;
  }
`} ${speed}s step-start 0s infinite;`;


const SubHeading = Heading.extend`
  font-weight: 100;
`
const Container = Banner.extend`
  color: ${themeGet('colors.textLight')};
  background: ${themeGet('gradients.cyanish')};
  position: absolute;
  min-height: 650px;
  ${media.lessThan('small')`
    min-width: 320px;
    min-height: 865px;
  `}

  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: -1;
`;
const MainHeading = Heading.extend`
  font-weight: 100;
  margin-top: 1em;
  margin-bottom: 1em;
  white-space: nowrap;
  &:before {
    content: "$> "
  }
  &:after{
    content: " ▌";
    ${blinkAnimation({ speed: 2 })}
  }
`;

const IconsContainer = styled.div`
 display: inline-block; 
 text-align: center;
  ${media.lessThan('small')` 
    margin-top: -2em;
    text-align: left; 
    width: 360px; 
    transform: scale(0.75)`}

  ${media.greaterThan('medium')` text-align: left; `}
`;

const IconGroup = styled.div`
  text-align: center;
  display: inline-block;
  & > * {
    display: inline-block;
    margin: 10px 10px 10px 10px;
  }


`;


export default () => (
  <div>
    <Container>
      <Me size={ 240 } src={'/img/me250.jpg'} />
      <MainHeading
        font='mono'
        fontSize={[ 4, 5 ]}>
        Hello World
      </MainHeading>
      <IconsContainer>
        <IconGroup>
          <GithubIcon bg={themeGet('gradients.grayish')} to='https://github.com/robbywashere' text='Github'/>
          <PhoneIcon bg={themeGet('gradients.pinkish')} to='https://calendly.com/robby' text='Appointment' fontSize='15px'/>
          <PaperclipIconLocal bg={themeGet('gradients.blueish')} to='/resume' text='Resume'/>
        </IconGroup>
        <IconGroup>
          <CommentIconLocal bg={themeGet('gradients.greenish')} to='/contact' text='Contact'/>
          <CodeIconLocal 
            bg={themeGet('gradients.peachish')} to='/blog' text='Code Blog'/>
        </IconGroup>
      </IconsContainer>
    </Container>
  </div>
);


