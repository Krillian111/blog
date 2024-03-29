import * as React from "react";
import * as PropTypes from "prop-types";
import styled, { createGlobalStyle } from "styled-components";
import colors from "../../style/colors";
import Menu from "../menu";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors.secondary};
    font-family: sans-serif;
  }
  a {
    color: ${colors.highlightPrimary};
    &:hover {
      color: ${colors.highlightSecondary}
    }
  }
  h1 {
    font-size: 26px;
  }
  h2 {
    font-size: 24px;
  }
  h3 {
    font-size: 22px;
  }
  h4 {
    font-size: 20px;
  }
  p,li,ul {
    font-size: 18px;
    line-height: 1.5;
  }
`;

const StyledMain = styled.main`
  height: 100%;
  padding: 10px;
  color: ${colors.primary};
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;

export default function PageTemplate({ children, currentRoute }) {
  return (
    <StyledMain>
      <title>Krillian&apos;s Blog</title>
      <GlobalStyle />
      <Menu currentRoute={currentRoute} />
      {children}
    </StyledMain>
  );
}

PageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  currentRoute: PropTypes.string.isRequired,
};
