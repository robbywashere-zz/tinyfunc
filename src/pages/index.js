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


const CustomHeading = styled(Heading)`
  &:before {
    content: "$> ";
  }
  &:after{
    content: " ▌";
    ${blinkAnimation({ speed: 2 })}
  }
`;
export default () => (
  <div>
    <Banner
      color='white'
      bg='darken'
      backgroundImage='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'>
      <Me />
      <CustomHeading
        f={[ 4, 5, 6, 7 ]}>
        Hello World
      </CustomHeading>
    </Banner>
    <Container>
      <Heading>Lets build something great together...</Heading>
      <Hackernews>The Next Big Thing</Hackernews>
    </Container>
  </div>
);


