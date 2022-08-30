import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ArticleList from "../components/article-list";
import PageTemplate from "../components/template/page-template";

export default function BlogPosts() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "blogpost" } } }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            frontmatter {
              slug
              title
              date(formatString: "MMMM DD, YYYY")
              tags
            }
          }
        }
      }
    }
  `);
  const blogposts = data.allMarkdownRemark.edges
    .map((edge) => edge.node.frontmatter)
    .map(({ slug, title, date, tags }) => ({
      route: slug,
      title,
      date,
      tags,
    }));
  return (
    <PageTemplate>
      <section>
        <h1>Blog</h1>
        <p>
          Blogposts I wrote myself to practice writing and once I am satisfied
          with the quality it would be nice to link these articles to juniors /
          trainees when they are struggling with a topic that I already covered.
          I am starting with very simple stuff to iron out the kinks first.
        </p>
        <ArticleList articles={blogposts} />
      </section>
    </PageTemplate>
  );
}
