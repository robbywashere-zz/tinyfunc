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
  margin: '0 auto',
  background-color: ${({ theme }) => theme.palette.primary}
  padding: '0px 1.0875rem 1.45rem',
  paddingTop: 0,
`

injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; }
`



const Layout = ({ children, data }) => (
  <Provider theme={ theme }>
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
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
