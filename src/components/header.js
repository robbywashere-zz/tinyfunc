import React from 'react'
import GLink from 'gatsby-link'
import styled from 'styled-components';
import g from '../lib/get';

const H = styled.h1`
  background-color: ${g('theme.colors.primary')};
  margin: 0 auto;
  font-weight: 100;
  padding: 0.5em;
`

const ArrowHead = H.extend`
  &:after {
    content: ' ⇒';
    color: ${g('theme.colors.textLight')};
  }
  `

const Link = styled(GLink)`
  text-decoration: none;
  color: ${g('theme.colors.textLight')};
`

const Header = ({ siteTitle, theme }) => (
  <ArrowHead>
      <Link
        to="/"
      >
        {siteTitle}
      </Link>
  </ArrowHead>
)

export default Header


