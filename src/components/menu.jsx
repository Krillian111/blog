import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import colors from "../style/colors";

const StyledMenuBar = styled.nav`
  display: flex;
`;

const StyledMenuItem = styled.span`
  a {
    color: ${colors.primary};
    background-color: ${colors.secondary};
    text-decoration: none;
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
    { title: "About me", route: "/about-me" },
  ];
  return (
    <StyledMenuBar>
      {menuItems.map(({ title, route }) => (
        <StyledMenuItem>
          <Link to={route}>{title}</Link>
        </StyledMenuItem>
      ))}
    </StyledMenuBar>
  );
}
