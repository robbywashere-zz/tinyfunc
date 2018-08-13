import React from "react";
import Helmet from 'react-helmet'

export default function MainTemplate({
  data, 
}) {
  const { markdownRemark } = data; 
  const { frontmatter, html } = markdownRemark;
  return (
    <div>
      <Helmet
        title={ markdownRemark.frontmatter.title}
      />
      <div
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

export const pageQuery = graphql`
  query MainTemplate($path: String!) {
    site {
      siteMetadata {
        title
        calendly
        github
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
