import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../style/colors";

const StyledArticle = styled.article`
  border-top-style: solid;
  border-top-width: 1px;
  border-color: ${colors.highlightPrimary};
  a {
    h2 {
      &:hover {
        color: ${colors.highlightSecondary};
      }
    }
    text-decoration: underline;
    text-underline-offset: 5px;
  }

  p {
    color: ${colors.primary};
    text-decoration: none;
    font-size: 16px;
  }
`;

const StyledDate = styled.span`
  float: right;
`;

export default function ArticleList({ articles }) {
  return (
    <div>
      {articles.map(({ route, title, date, tags }) => (
        <StyledArticle key={route}>
          <Link to={route}>
            <h2>{title}</h2>
          </Link>
          <p>
            {tags && <span>{tags.map((tag) => `#${tag}`).join(", ")}</span>}
            {date && <StyledDate>{date}</StyledDate>}
          </p>
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
      date: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
    }).isRequired
  ).isRequired,
};
