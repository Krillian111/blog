// @ts-nocheck
import React from "react";
import { Link } from "gatsby";
import * as PropTypes from "prop-types";
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
    color: ${({ active }) => (active ? colors.secondary : colors.primary)};
    text-decoration: none;
    background-color: ${({ active }) =>
      active ? colors.highlightPrimary : colors.secondary};
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
  ideas: { title: "Ideas", route: "/ideas" },
  aboutMe: { title: "About me", route: "/about-me" },
};

export default function Menu({ currentRoute }) {
  const links = Object.values(menuLinks);
  return (
    <StyledMenuBar>
      {links.map(({ title, route }) => (
        <StyledMenuItem key={title} active={currentRoute === route}>
          <Link to={route}>{title}</Link>
        </StyledMenuItem>
      ))}
    </StyledMenuBar>
  );
}

Menu.propTypes = {
  currentRoute: PropTypes.string.isRequired,
};
