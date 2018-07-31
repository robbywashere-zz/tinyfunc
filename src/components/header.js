import React from 'react'
import Link from 'gatsby-link'
import { Base, Heading } from 'rebass';
import styled from 'styled-components';

const H = styled(Base)`
  background: ${({ theme })=> theme.palette.primary };
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
`

const Header = ({ siteTitle, theme }) => (
  <H is="h1">
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        {siteTitle}
      </Link>
  </H>
)

export default Header
