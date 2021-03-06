import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ArticleList from "../components/article-list";
import PageTemplate from "../components/template/page-template";

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query MenuQuery {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "blogpost" } } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 100
      ) {
        edges {
          node {
            frontmatter {
              slug
              title
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `);
  const blogposts = data.allMarkdownRemark.edges
    .map((edge) => edge.node.frontmatter)
    .map(({ slug, title, date }) => ({
      route: slug,
      title,
      date,
    }));
  return (
    <PageTemplate>
      <ArticleList articles={blogposts} />
    </PageTemplate>
  );
}
