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



const IcoGrid = styled.div`


  text-align: center;

  & > * {
    display: inline-block;
    margin: 0 10px 10px 10px;
  }

  display: grid;

  grid-template-columns: repeat(3, 100px);

  grid-gap: 30px;

  ${media.lessThan('small')` 
    transform: scale(0.75)`
  }

  ${media.greaterThan('medium')` 
    grid-template-columns: repeat(4, 100px);
  `}
  ${media.greaterThan('large')` 
    grid-template-columns: repeat(5, 100px);
  `}
  
`


export default () => (
  <div>
    <Container>
      <Me size={ 240 } src={'/img/me250.jpg'} />
      <MainHeading
        font='mono'
        fontSize={[ 4, 5 ]}>
        Hello World
      </MainHeading>
      <IcoGrid>
          <GithubIcon bg={themeGet('gradients.grayish')} to='https://github.com/robbywashere' text='Github'/>
          <PhoneIcon bg={themeGet('gradients.pinkish')} to='https://calendly.com/robby' text='Appointment' fontSize='15px'/>
          <PaperclipIconLocal bg={themeGet('gradients.blueish')} to='/resume' text='Resume'/>
          <CommentIconLocal bg={themeGet('gradients.greenish')} to='/contact' text='Contact'/>
          <CodeIconLocal 
            bg={themeGet('gradients.peachish')} to='/blog' text='Code Blog'/>
      </IcoGrid>
    </Container>
  </div>
);


