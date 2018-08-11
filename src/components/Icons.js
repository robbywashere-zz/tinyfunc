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
  background: black;
  border-radius: 12%;
`;


const p = (name)=>(prop)=>prop[name];

export const Square = styled.div`
  position: relative;
  width: ${p('size')};
  display: inline-block;
  vertical-align: middle;
  height: ${p('size')};
  background: ${p('bg')};
  text-align: center;
  border-radius: 12%;
  svg {
    margin-top: 7px;
    width: ${p('iconSize')};
    height: ${p('iconSize')};
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

export const Icon = ({
  url,
  bg='black', 
  fontSize= '16px', 
  size = '100px',
  iconSize = '70%',
})=>(
  <Square bg={ bg } iconSize={ iconSize } size={ size }>
    { children() }
    <Text fontSize={fontSize}>{ text }</Text>
  </Square>
)

export const GithubIcon = ({ 
  url,
  bg='black', 
  fontSize= '16px', 
  size = '100px',
  iconSize = '70%',
  text='Github',
})=>(
  <Square bg={ bg } iconSize={ iconSize } size={ size }>
    <Github />
    <Text fontSize={fontSize}>{ text }</Text>
  </Square>
)

export const PaperclipIcon = ({
  bg='black', 
  fontSize= '16px', 
  size = '100px', 
  text='Paperclip' 
})=>(
  <Square bg={ bg } iconSize='65%' size={ size }>
    <Paperclip/>
    <Text fontSize={fontSize}>{ text }</Text>
  </Square>
)
export const PhoneIcon = ({
  bg='black', 
  fontSize= '16px', 
  size = '100px', 
  text='Phone' 
})=>(
  <Square bg={ bg } iconSize='65%' size={ size }>
    <Phone/>
    <Text fontSize={fontSize}>{ text }</Text>
  </Square>
)
export const CommentIcon = ({
  bg='black', 
  fontSize= '16px', 
  size = '100px', 
  text='Comment' 
})=>(
  <Square bg={ bg } iconSize='67%' size={ size }>
    <Comment style={{ marginLeft: '5px' }}/>
    <Text fontSize={fontSize}>{ text }</Text>
  </Square>
)

