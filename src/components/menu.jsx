import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import colors from "../style/colors";

const StyledMenuBar = styled.nav`
  display: flex;
  padding-bottom: 10px;
  border-bottom-style: solid;
  border-bottom-width: 5px;
  border-bottom-color: ${colors.highlightPrimary};
`;

const StyledMenuItem = styled.span`
  a {
    font-size: 20px;
    color: ${colors.primary};
    text-decoration: none;
    background-color: ${colors.secondary};
    padding: 10px;
    &:hover {
      color: ${colors.secondary};
      background-color: ${colors.highlightPrimary};
    }
  }
`;

export default function Menu() {
  const menuItems = [
    { title: "Blog", route: "/" },
    { title: "Resources", route: "/resources" },
    { title: "About me", route: "/about-me" },
  ];
  return (
    <StyledMenuBar>
      {menuItems.map(({ title, route }) => (
        <StyledMenuItem key={title}>
          <Link to={route}>{title}</Link>
        </StyledMenuItem>
      ))}
    </StyledMenuBar>
  );
}
