import React, { Component } from 'react';
import styled, { css } from  'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { fa } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { defaultProps } from 'recompose';

import { Github } from 'styled-icons/fa-brands/Github.cjs';
import { Phone } from 'styled-icons/fa-solid/Phone.cjs';
import { Paperclip } from 'styled-icons/fa-solid/Paperclip.cjs'
import { Comment } from 'styled-icons/fa-solid/Comment.cjs'
import { Code } from 'styled-icons/fa-solid/Code.cjs'

import GLink from 'gatsby-link';

import { fontSize } from 'styled-system';

export const Icon1 = styled.div`
  width: 100px;
  height: 100px;
  background: black;
  border-radius: 12%;
`;


const p = (name)=>(prop)=>prop[name];

const SquareStyle = css`
  position: relative;
  width: ${p('size')};
  display: inline-block;
  vertical-align: middle;
  color: inherit;
  height: ${p('size')};
  background: ${p('bg')};
  text-align: center;
  border-radius: 12%;
  padding: 0;
  transition: all .2s; 
  &:hover {
    transform: scale(1.07)
  }
  svg {
    margin-top: 7px;
    width: ${p('iconSize')};
    height: ${p('iconSize')};
  }
`;


export const Square = styled.a.attrs({
  rel: 'nofollow',
  href: ({ to }) => to
})` 
  ${SquareStyle}
`;

export const GSquare = styled(GLink).attrs({
  rel: 'nofollow'
})` 
  ${SquareStyle}
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
  to="#",
  bg='black', 
  fontSize= '16px', 
  size = '100px',
  iconSize = '70%',
  text='???',
  Link=Square,
  i: Ico
})=>(
  <Link bg={ bg } to={ to } iconSize={ iconSize } size={ size }>
    <Ico />
    <Text fontSize={fontSize}>{ text }</Text>
  </Link>
)


const IcoFactory = (ico, Link = Square ) => defaultProps({ text: ico.displayName, i: ico, Link })(Icon);

export const GithubIcon = IcoFactory(Github);

export const GithubIconLocal = IcoFactory(Github, GSquare);

export const PaperclipIcon = IcoFactory(Paperclip);

export const PaperclipIconLocal = IcoFactory(Paperclip, GSquare);

export const PhoneIcon = IcoFactory(Phone);

export const PhoneIconLocal = IcoFactory(Phone, GSquare);

export const CommentIcon = ()=> IcoFactory(Comment);

export const CommentIconLocal = IcoFactory(Comment, GSquare);

export const CodeIcon = IcoFactory(Code);

export const CodeIconLocal = IcoFactory(Code, GSquare);


