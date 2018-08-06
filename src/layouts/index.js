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
  padding-top: 0;
`

injectGlobal`
  * { box-sizing: border-box; }
  body {
    margin: 0;
  }
@font-face {
  font-family: "San Francisco";
  font-weight: 100;
  src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff");
}
`



const Layout = ({ children, data }) => (
  <Provider theme={ theme }>
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[]}
      />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Body>
        {children()}
      </Body>
    </div>
  </Provider>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
