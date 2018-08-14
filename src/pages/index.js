import React from 'react'
import Home from '../components/Home'

export default ({
  data: {
    site: {
      siteMetadata: { github, calendly },
    },
  },
}) => <Home github={github} calendly={calendly} />

export const query = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
        calendly
        github
      }
    }
  }
`
