import React from "react";
import styled, { keyframes } from "styled-components";
import { Box, Avatar, Banner, Heading } from "rebass";
import { fontSize } from "styled-system";
import { CommentIcon, PaperclipIcon, PhoneIcon, GithubIcon } from "../components/Icons";

const DEFAULT_SRC = "https://www.gravatar.com/avatar/662494429e06d1aa2ff71d9ccfcd8119?s="

const Me = ({ size = 250, src }) => {
  return (<Avatar size={ 250 } src={DEFAULT_SRC + size} />)
}



const blinkAnimation = ({speed=1})=>`animation: ${keyframes`
  50% {
    visibility: hidden;
  }
`} ${speed}s step-start 0s infinite;`;


const SubHeading = Heading.extend`
  font-weight: 100;
`
const Container = Banner.extend`
  color:  ${({ theme: { colors: { textLight } } }) => textLight};
  background: linear-gradient(to bottom,#55efcb 0,#5bcaff 100%);
  margin-top: -2em;
  position:absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index:-1;
`;
const MainHeading = Heading.extend`
  font-weight: 100;
  //font-size: 3em;
  white-space: nowrap;
  &:before {
    content: "$> "
  }
  &:after{
    content: " ▌";
    ${blinkAnimation({ speed: 2 })}
  }
`;

const IconContainer = styled.div`
  width: 100%;
  text-align: center;
`;

export default () => (
  <div>
    <Container>
      <Avatar size={ 250 } src={'/img/me250.jpg'} />
      <MainHeading
        font='mono'
        fontSize={[ 5 ]}>
        Hello World
      </MainHeading>
      <IconContainer>
        <GithubIcon/>
        <PhoneIcon text='Appointment' fontSize='15px'/>
        <PaperclipIcon text={'Resume'}/>
        <CommentIcon text={'Email'}/>
      </IconContainer>
    </Container>
  </div>
);


