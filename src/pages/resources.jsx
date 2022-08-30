import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ArticleList from "../components/article-list";
import PageTemplate from "../components/template/page-template";

export default function Resources() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "resource" } } }) {
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
        <h1>Reading Lists</h1>
        <p>
          These pages contain articles, blog posts, talks etc. regarding
          software engineering topics that I read / listened to myself and found
          insightful. Over the years I had numerous occasions where I wanted to
          revisit some of the things I read or give the link to a colleague but
          was unable to do so, thus I recently started this archive.
        </p>
        <ArticleList articles={resourceLists} />
      </section>
    </PageTemplate>
  );
}
