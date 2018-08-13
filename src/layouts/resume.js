import React from 'react'
import PropTypes from 'prop-types'
import { injectGlobal } from 'styled-components'
import Header from '../components/header'
import { Provider }  from 'rebass';
import theme from '../styles/theme';
import '../styles/global';
import styled from 'styled-components';
import media from '../styles/media';


const tableColor = "#F5F5F5";

const horizNav = `
ul:first-of-type {  
  margin-left: 0;
  padding-left: 0;
     & > li {
        display: inline-block;
        &:nth-child(n+2) { 
          margin-left: 2em;
        }
     }
}`;

const Body = styled.div`
//Responsive 'Nav' 

${media.greaterThan('medium')`${horizNav}`}

@media print {
  ${horizNav}
}

-webkit-print-color-adjust: exact;
margin: 0 auto;
padding: 0px 1.0875rem 1.45rem;
padding-top: 0;
font-size: 1em;
font-weight: medium;

// Hide early experience
ul:nth-of-type(n+6) {
  display: none;
}

h3 {
  text-decoration: underline;
}
strong {
  font-weight: 500;
}
strong {
  font-weight: bold;
}

//skills table
table {
  border-collapse: collapse;
}
td {
  padding: 0.5em 1em 0.5em 1em;
    ${media.lessThan('medium')`
      @media screen {
        display: inline-block;
        padding: 0.25em 0 0.25em 0;
        margin-top: 0.175em;
        margin-bottom: 0.175em;
        &:after {
          content: ", ";
        }
        &:first-of-type:after {
          content: "";
        }
        &:nth-of-type(2):before {
          content: " ";
        }
        &:last-of-type:after {
          content: "";
        }
      }
    `}
  }
}
tr:nth-child(odd) {
  background: ${tableColor};
}
tr:last-child {
  border-bottom: 5px solid ${tableColor};
}
`

export default ({ children, data }) => (
  <Provider theme={ theme }>
    <div>
      <Body>
        {children()}
      </Body>
    </div>
  </Provider>
)


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
