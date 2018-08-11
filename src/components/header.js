import React from 'react'
import GLink from 'gatsby-link'
import { Base, Heading } from 'rebass';
import styled from 'styled-components';
import g from '../lib/get';
import tri from '../img/tri.svg';

const H = Heading.extend`
  background-color: ${g('theme.colors.primary')};
  margin: 0 auto;
  font-weight: 100;
  padding: 0.5em;
  &:after {
    content: ' ⇒';
    color: #FFF;
  }
`

const Link = styled(GLink)`
  text-decoration: none;
  color: ${g('theme.colors.textLight')};
`

const Header = ({ siteTitle, theme }) => (
  <H is="h1">
      <Link
        to="/"
      >
        {siteTitle}
      </Link>
  </H>
)

export default Header
