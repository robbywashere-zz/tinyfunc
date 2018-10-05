import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Box, Flex, Avatar, Banner, Heading } from 'rebass'
import { fontSize, themeGet } from 'styled-system'
import { PaperclipIconLocal, PhoneIcon, GithubIcon } from '../components/Icons'
import Hackernews from '../components/hackernews';
import media from '../styles/media'

//https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items
const Me = Avatar.extend``

const blinkAnimation = ({ speed = 1 }) =>
  `animation: ${keyframes`
  50% {
    visibility: hidden;
  }
`} ${speed}s step-start 0s infinite;`

const SubHeading = Heading.extend`
  font-weight: 100;
`
const Container = Banner.extend`
  min-height: 650px;
  ${media.lessThan('small')`
    min-width: 320px;
    min-height: 600px;
  `} left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: -1;
  background: ${themeGet('colors.bgLight')};
  
`

const Hero = styled(Container)`
  color: ${themeGet('colors.textLight')};
  background: ${themeGet('gradients.cyanish')};
`

const MainHeading = Heading.extend`
  font-weight: 100;
  margin-top: 1em;
  margin-bottom: 1em;
  white-space: nowrap;
  &:before {
    content: '$> ';
  }
  &:after {
    content: ' ▌';
    ${blinkAnimation({ speed: 2 })};
  }
`

const IcoGrid = styled.div`

  text-align: center;

  display: grid;

  grid-template-columns: repeat(3, 100px);

  grid-gap: 30px;

  ${media.lessThan('small')` 
    transform: scale(0.75)`}

  ${media.greaterThan('medium')` 
   //Disable for now grid-template-columns: repeat(4, 100px);
  `}
  ${media.greaterThan('large')` 
    //Disable for now grid-template-columns: repeat(5, 100px);
  `}

`

export default ({ github, calendly }) => (
  <div>
    <div>
      <Hero>
        <Me size={240} src={'/img/me250.jpg'} />
        <MainHeading font="mono" fontSize={[4, 5]}>
          Hello World
        </MainHeading>
        <IcoGrid>
          <GithubIcon
            bg={themeGet('gradients.grayish')}
            to={github}
            text="Github"
          />
          <PhoneIcon
            bg={themeGet('gradients.pinkish')}
            to={calendly}
            text="Appointment"
            fontSize="15px"
          />
          <PaperclipIconLocal
            bg={themeGet('gradients.blueish')}
            to="/resume"
            text="Resume"
          />
        </IcoGrid>
      </Hero>
    </div>
    <div>
      <Container>
        <SubHeading color='textDark'><em>Lets build something great together</em></SubHeading>
        <Hackernews myStory={{
          title: 'The greatest thing of all time', 
          score: 1337, 
          host: 'nextbigthing.com', 
          age: '1 hour ago',
          time: Date.now(), 
          descendants: 365, 
          by: 'robbywashere'
        }}>The Next Big Thing</Hackernews>
    </Container>
  </div>
</div>
)
