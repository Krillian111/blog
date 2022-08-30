import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ArticleList from "../components/article-list";
import PageTemplate from "../components/template/page-template";

export default function Ideas() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "idea" } } }) {
        edges {
          node {
            frontmatter {
              slug
              title
              tags
            }
          }
        }
      }
    }
  `);
  const ideas = data.allMarkdownRemark.edges
    .map((edge) => edge.node.frontmatter)
    .map(({ slug, title, tags }) => ({
      route: slug,
      title,
      tags,
    }));
  return (
    <PageTemplate>
      <section>
        <h1>Ideas</h1>
        <p>
          A space to collect different things I want to explore, read about, or
          build in the future.
        </p>
        <ArticleList articles={ideas} />
      </section>
    </PageTemplate>
  );
}
