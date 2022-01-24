import * as React from "react";
import * as PropTypes from "prop-types";
import styled, { createGlobalStyle } from "styled-components";
import colors from "../../style/colors";
import Menu from "../menu";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors.secondary};
    fontfamily: -apple-system, Roboto, sans-serif, serif;
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

export default function PageTemplate({ children }) {
  // TODO: put into meta
  // <title>Krillian&apos;s blog</title>
  return (
    <StyledMain>
      <GlobalStyle />
      <Menu />
      {children}
    </StyledMain>
  );
}

PageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
