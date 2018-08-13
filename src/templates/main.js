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

