import React from "react";
import styled, { keyframes } from "styled-components";
import { Box, Avatar, Banner, Heading } from "rebass";
import { fontSize } from "styled-system";
import Hackernews from '../components/hackernews';

const DEFAULT_SRC = "https://www.gravatar.com/avatar/662494429e06d1aa2ff71d9ccfcd8119?s="

const Me = ({ size = 250, src }) => {
  return (<Avatar size={ 250 } src={DEFAULT_SRC + size} />)
}

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


const blinkAnimation = ({speed=1})=>`animation: ${keyframes`
  50% {
    visibility: hidden;
  }
`} ${speed}s step-start 0s infinite;`;


const SubHeading = styled(Heading)`
  font-weight: 100;
`
const Nav = styled(Banner)`
  color:  ${({ theme: { colors: { textLight } } }) => textLight};
  //background: linear-gradient(to bottom,#55efcb 0,#5bcaff 100%);
  background-image: url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20');
`;
const MainHeading = styled(Heading)`
  font-weight: 100;
  font-size: 3em;
  &:before {
    content: "$> "
  }
  &:after{
    content: "  ▌";
    ${blinkAnimation({ speed: 2 })}
  }
`;
const myStory = { 
  title: 'The greatest thing of all time', 
  score: 1337, 
  host: 'nextbigthing.com', 
  age: '1 hour ago',
  time: Date.now(), 
  descendants: 365, 
  by: 'robbywashere'
}
export default () => (
  <div>
    <Nav
      bg='darken'
    >
      <Me />
      <MainHeading
        f={[ 4, 5, 6, 7 ]}>
        Hello World
      </MainHeading>
    </Nav>
    <Container>
      <SubHeading color='textDark'><em>Lets build something great together</em></SubHeading>
      <Hackernews myStory={ myStory } >The Next Big Thing</Hackernews>
    </Container>
  </div>
);


