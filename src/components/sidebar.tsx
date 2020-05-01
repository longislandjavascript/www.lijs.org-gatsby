import React, { useMemo } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import styled from "styled-components";
import { LIJSLogo } from "./lijs-logo";
import { Link } from "./link";
import { Show } from "./show";
import { links } from "../data/sidebar-links";

export type SidebarProps = {
  forwardRef: any;
  isOpen: boolean;
};

export const Sidebar: React.FC<SidebarProps> = ({ forwardRef, isOpen }) => {
  return (
    <StyledAside ref={forwardRef}>
      <ul>
        <li className="logo">
          <LIJSLogo type="sidebar" />
          <br />
        </li>

        {links.map(link => {
          const [label, to, Icon] = link;
          const isAnchor = to.includes("http");
          return (
            <li key={label}>
              <SidebarLink
                tabIndex={isOpen ? 0 : -1}
                to={isAnchor ? null : to}
                href={isAnchor ? to : null}
                activeClassName="active-nav-link"
              >
                <Icon />
                <span>{label}</span>
                <Show when={to.includes("http")}>
                  <FaExternalLinkAlt size={10} />
                </Show>
              </SidebarLink>
            </li>
          );
        })}
      </ul>
    </StyledAside>
  );
};

const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  border-radius: 0 3em 3em 0;
  margin: 0;
  padding: 10px 20px;
  font-weight: 600;
  font-size: 1rem;

  ${p => p.theme.small} {
    margin: 5px 0px;
    font-size: 1.1rem;
  }

  span {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const StyledAside = styled.aside`
  width: ${p => p.theme.sidebarWidth}px;
  overflow: scroll;
  padding: 10px 10px 100px 10px;
  background: ${p => p.theme.colors.blueDark};
  position: fixed;
  top: 0;
  bottom: 0;
  left: ${p => (p.theme.isSidebarOpen ? 0 : "-100%")};
  transition: left 300ms ease-in-out;
  z-index: 9999;
  /* box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.2); */
  .logo {
    display: block;
  }

  ${p => p.theme.small} {
    top: ${p => p.theme.headerHeight}px;
    .logo {
      display: none;
    }
  }

  ul {
    margin-top: 10px;
  }

  li {
    padding: 0;
    margin: 0;
    margin-left: -10px;
  }
  .active-nav-link {
    color: ${p => p.theme.colors.logoYellow};
  }
`;

// export const Sidebar = React.memo(SidebarComponent);
