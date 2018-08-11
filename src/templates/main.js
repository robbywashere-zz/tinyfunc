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
        title={data.markdownRemark.frontmatter.title}
      />
      <div
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

export const pageQuery = graphql`
  query Main($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
