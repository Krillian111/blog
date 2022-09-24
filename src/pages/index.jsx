import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ArticleList from "../components/article-list";
import PageTemplate from "../components/template/page-template";
import { menuLinks } from "../components/menu";

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
    <PageTemplate currentRoute={menuLinks.blog.route}>
      <section>
        <h1>Blog</h1>
        <p>
          Tech-related blog posts about very simple topics to practice writing
          which is very much a skill of its own. Before I dive into anything
          more complex I need to make them less verbose. Practice makes perfect.
        </p>
        <ArticleList articles={blogposts} />
      </section>
    </PageTemplate>
  );
}
