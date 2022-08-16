import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ArticleList from "../components/article-list";
import PageTemplate from "../components/template/page-template";

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "resources" } } }
        limit: 15
      ) {
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
  const resourceLists = data.allMarkdownRemark.edges
    .map((edge) => edge.node.frontmatter)
    .map(({ slug, title, tags }) => ({
      route: slug,
      title,
      tags,
    }));
  return (
    <PageTemplate>
      <section>
        <h1>Resources</h1>
        <ArticleList articles={resourceLists} />
      </section>
    </PageTemplate>
  );
}
