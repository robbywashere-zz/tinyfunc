import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { injectGlobal } from 'styled-components'
import Header from '../components/header'
import { Provider }  from 'rebass';
import theme from '../theme';
import './index.css'

import styled from 'styled-components';

const Body = styled.div`
  margin: 0 auto;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  font-size: 12px;
  font-weight: 300;
  h3 {
    text-decoration: underline;
  }
  strong {
    font-weight: 500;
  }
  ul:nth-of-type(n+6) {
    display: none;
  }
`

injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; }
`

const Layout = ({ children, data }) => (
    <div>
      <Helmet
        title={data.markdownRemark.frontmatter.title}
      />
      <Body>
        {children()}
      </Body>
    </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query PostsSiteTitleQuery {

    markdownRemark {
      frontmatter {
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }

  }
`
