/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Menu from './menu';

export default function BlogTemplate({
  data,
}) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <main>
      <Menu />
      <article>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <section
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </main>
  );
}

BlogTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: {
      html: PropTypes.string,
      frontmatter: {
        data: PropTypes.string,
        slug: PropTypes.string,
        title: PropTypes.string,
      },
    },
  }).isRequired,
};

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug }}) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;
