import React, { Component } from 'react';
import styled from  'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { fa } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { Github } from 'styled-icons/fa-brands/Github.cjs';
import { Phone } from 'styled-icons/fa-solid/Phone.cjs';
import { Paperclip } from 'styled-icons/fa-solid/Paperclip.cjs'
import { Comment } from 'styled-icons/fa-solid/Comment.cjs'

import { fontSize } from 'styled-system';

export const Icon1 = styled.div`
  width: 100px;
  height: 100px;
  background-color: black;
  border-radius: 12%;
`;


const iconSize = ({ iconSize })=>iconSize;
const size = ({ size })=>size;

export const Square = styled.div`
  position: relative;
  width: ${size};
  display: inline-block;
  vertical-align: middle;
  height: ${size};
  margin: 10px;
  background-color: black;
  text-align: center;
  border-radius: 12%;
  svg {
    margin-top: 7px;
    width: ${iconSize};
    height: ${iconSize};
  }
`;

const Text = styled.div`
  position: absolute;
  bottom: 2px;
  padding: 0;
  left: 0;
  right: 0;
  ${fontSize}
`

export const AnyIcon = ({ 
  url,
  color='black', 
  fontSize= '16px', 
  size = '100px',
  iconSize = '70%',
  text='Github',
  children
})=>(

)

export const GithubIcon = ({ 
  url,
  color='black', 
  fontSize= '16px', 
  size = '100px',
  iconSize = '70%',
  text='Github',
})=>(
  <AnyIcon>{( )=> }</AnyIcon>
  <Square iconSize={ iconSize } size={ size }>
    <Github/>
    <Text fontSize={fontSize}>{ text }</Text>
  </Square>
)

export const PaperclipIcon = ({
  color='black', 
  fontSize= '16px', 
  size = '100px', 
  text='Paperclip' 
})=>(
  <Square iconSize='65%' size={ size }>
    <Paperclip/>
    <Text fontSize={fontSize}>{ text }</Text>
  </Square>
)
export const PhoneIcon = ({
  color='black', 
  fontSize= '16px', 
  size = '100px', 
  text='Phone' 
})=>(
  <Square iconSize='65%' size={ size }>
    <Phone/>
    <Text fontSize={fontSize}>{ text }</Text>
  </Square>
)
export const CommentIcon = ({
  color='black', 
  fontSize= '16px', 
  size = '100px', 
  text='Comment' 
})=>(
  <Square iconSize='67%' size={ size }>
    <Comment style={{ marginLeft: '5px' }}/>
    <Text fontSize={fontSize}>{ text }</Text>
  </Square>
)
//export const Phone = ()=><FontAwesomeIcon icon={ faPhone }/>

