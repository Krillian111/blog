import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import PageTemplate from "../components/template/page-template";

const AboutMe = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { slug: { eq: "/about-me" } }) {
        html
      }
    }
  `);
  const { html } = data.markdownRemark;
  return (
    <PageTemplate>
      <section
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </PageTemplate>
  );
};

export default AboutMe;
