import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";
import PageTemplate from "./page-template";

const StyledPost = styled.section``;

export default function Blogpost({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <PageTemplate>
      <article>
        <StyledPost dangerouslySetInnerHTML={{ __html: html }} />
      </article>
      <h4>{frontmatter.date}</h4>
    </PageTemplate>
  );
}

Blogpost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
      frontmatter: PropTypes.shape({
        date: PropTypes.string,
        slug: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;
