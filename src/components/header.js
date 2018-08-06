import React from 'react'
import GLink from 'gatsby-link'
import { Base, Heading } from 'rebass';
import styled from 'styled-components';

const H = styled(Base)`
  background-color: ${({ theme }) => theme.colors.primary};
  margin: 0 auto;
  font-weight: 100;
  padding: 0.5em;
`

const Link = styled(GLink)`
  text-decoration: none;
  color: ${({ theme: { colors: { textLight } } }) => textLight};
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
