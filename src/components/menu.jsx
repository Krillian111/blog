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

export const menuLinks = {
  blog: { title: "Blog", route: "/" },
  resources: { title: "Reading Lists", route: "/resources" },
  projects: { title: "Projects", route: "/projects" },
  aboutMe: { title: "About me", route: "/about-me" },
};

export default function Menu() {
  const links = Object.values(menuLinks);
  return (
    <StyledMenuBar>
      {links.map(({ title, route }) => (
        <StyledMenuItem key={title}>
          <Link to={route}>{title}</Link>
        </StyledMenuItem>
      ))}
    </StyledMenuBar>
  );
}
