import * as React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import ArticleList from "../components/article-list";
import PageTemplate from "../components/template/page-template";
import { menuLinks } from "../components/menu";

export default function Projects() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "project" } } }) {
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
  const projects = data.allMarkdownRemark.edges
    .map((edge) => edge.node.frontmatter)
    .map(({ slug, title, tags }) => ({
      route: slug,
      title,
      tags,
    }));
  return (
    <PageTemplate currentRoute={menuLinks.projects.route}>
      <section>
        <h1>Projects</h1>
        <p>
          I primarily <Link to={menuLinks.resources.route}>read</Link> to
          improve my abilities as I am more interested in software architecture
          than pure coding and those concepts are often beyond the scope of a
          quick prototype / private project.
        </p>
        <p>
          However, I want to practice my prototyping skills and explore core
          APIs that I haven&apos;t been exposed to at work as these are very
          eye-opening experiences.
        </p>
        <ArticleList articles={projects} />
      </section>
    </PageTemplate>
  );
}
