import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../style/colors";

const StyledArticle = styled.article`
  border-top-style: solid;
  border-top-width: 2px;
  border-color: ${colors.highlight};
  h3 {
    color: ${colors.primary};
    text-decoration: underline;
  }
  &:hover {
    h3 {
      color: ${colors.highlight};
    }
  }
  p {
    color: ${colors.primary};
    text-decoration: none;
  }
`;

export default function ArticleList({ articles }) {
  return (
    <div>
      <h2>Blog</h2>
      {articles.map(({ route, title, date }) => (
        <StyledArticle>
          <Link to={route}>
            <h3>{title}</h3>
          </Link>
          <h4>{date}</h4>
        </StyledArticle>
      ))}
    </div>
  );
}

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      preview: PropTypes.node.isRequired,
    }).isRequired
  ).isRequired,
};
