import React from "react";
import Helmet from 'react-helmet'

export default function MarkdownTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
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

  /*export const pageQuery = graphql`
  query Markdown($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;*/
