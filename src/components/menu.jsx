import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

export default function Menu() {
  const data = useStaticQuery(graphql`
    query MenuQuery {
      allMarkdownRemark(
        filter: {frontmatter: {type: {eq: "blogpost"}}}
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 100
      ) {
        edges {
          node {
            frontmatter {
              slug
            } 
          }
        }
      }
    }
  `);
  const blogposts = data.allMarkdownRemark.edges.map((edge) => edge.node.frontmatter.slug);
  return (
    <nav>
      <ul>
        <li><Link to="/about-me">About me</Link></li>
      </ul>
      <ol>
        {blogposts.map((slug) => (
          <li><Link to={slug}>{slug}</Link></li>
        ))}
      </ol>
    </nav>
  );
}
