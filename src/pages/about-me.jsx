import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import PageTemplate from "../components/template/page-template";
import { menuLinks } from "../components/menu";

export default function AboutMe() {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { slug: { eq: "/about-me" } }) {
        html
      }
    }
  `);
  const { html } = data.markdownRemark;
  return (
    <PageTemplate currentRoute={menuLinks.aboutMe.route}>
      <section
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </PageTemplate>
  );
}
