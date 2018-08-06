import React from 'react'
import PropTypes from 'prop-types'
import { injectGlobal } from 'styled-components'
import Header from '../components/header'
import { Provider }  from 'rebass';
import theme from '../theme';
import './index.css'

import styled from 'styled-components';


const tcolor = "#F5F5F5";

const Body = styled.div`

  -webkit-print-color-adjust: exact;
  margin: 0 auto;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  font-size: 1em;
  font-weight: 300;
  h3 {
    text-decoration: underline;
  }
  strong {
    font-weight: 500;
  }
  ul:nth-of-type(n+5) {
    display: none;
  }
  table {
    border-collapse: collapse;
  }
  td {
    padding: 0.5em 1em 0.5em 1em;

  }

  strong {
    font-weight: bold;
  }
  thead {
    display: none;
  }
  tr:nth-child(odd) {
    background: ${tcolor};
  }
  tr:last-child {
    border-bottom: 2px solid ${tcolor};
  }
`

injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; }
`

const Layout = ({ children, data }) => (
  <div>
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
  query ResumeSiteTitleQuery {

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
