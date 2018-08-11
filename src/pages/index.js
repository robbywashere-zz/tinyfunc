import React from "react";
import styled, { keyframes } from "styled-components";
import { Box, Avatar, Banner, Heading } from "rebass";
import { fontSize } from "styled-system";
import { CommentIcon, PaperclipIcon, PhoneIcon, GithubIcon } from "../components/Icons";
import g from '../lib/get';

const DEFAULT_SRC = "https://www.gravatar.com/avatar/662494429e06d1aa2ff71d9ccfcd8119?s="

const Me = ({ size = 250, src }) => {
  return (<Avatar size={ 250 } src={DEFAULT_SRC + size} />)
}


export const pinkish = `linear-gradient(to bottom,#fb8ad4 0,#9221ff 100%)`;
export const grayish = `linear-gradient(to bottom,#dbdbdb 0,#4b4b4b 100%)`;
export const blueish = `linear-gradient(to top,#1d77ef 0,#81f3fd 100%)`;
export const greenish = `linear-gradient(to bottom,#b6f9a8 0,#0cd318 100%)`;
export const cyanish = `linear-gradient(to bottom,#00ffc3 0,#0ab0ff 100%)`;



const blinkAnimation = ({speed=1})=>`animation: ${keyframes`
  50% {
    visibility: hidden;
  }
`} ${speed}s step-start 0s infinite;`;


const SubHeading = Heading.extend`
  font-weight: 100;
`
const Container = Banner.extend`

  color: ${g('theme.colors.textLight')};
  background: ${cyanish};
  margin-top: -2em;
  padding-top: 6em;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index:-1;
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
      <Avatar size={ 240 } src={'/img/me250.jpg'} />
      <MainHeading
        font='mono'
        fontSize={[ 4, 5 ]}>
        Hello World
      </MainHeading>
      <IconsContainer>
        <IconGroup>
          <GithubIcon bg={grayish}/>
          <PhoneIcon bg={pinkish} text='Appointment' fontSize='15px'/>
        </IconGroup>
        <IconGroup>
          <PaperclipIcon bg={blueish} text={'Resume'}/>
          <CommentIcon bg={greenish} text={'Contact'}/>
        </IconGroup>
      </IconsContainer>
    </Container>
  </div>
);


