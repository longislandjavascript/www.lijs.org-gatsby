import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import styled from "styled-components";
import { LIJSLogo } from "./lijs-logo";
import { Link } from "./link";
import { Show } from "./show";
import { links } from "../data/sidebar-links";

export type SidebarProps = {
  forwardRef: any;
  isOpen: boolean;
  isReady: boolean;
};

export const SidebarComponent: React.FC<SidebarProps> = ({
  forwardRef,
  isOpen,
  isReady,
}) => {
  return (
    <StyledAside ref={forwardRef} isReady={isReady}>
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
  padding: 10px 20px;
  font-weight: 600;
  font-size: 1rem;
  margin: 1px 0px;

  ${p => p.theme.small} {
    margin: 4px 0px;
    border-radius: 0;
  }

  span {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const StyledAside = styled.aside<{ isReady: boolean }>`
  width: ${p => p.theme.sidebarWidth}px;
  overflow: scroll;
  padding: 10px;
  background: ${p => p.theme.colors.blueDark};
  position: fixed;
  top: 0;
  bottom: 0;
  left: ${p => (p.theme.isSidebarOpen ? 0 : "-100%")};
  transition: top 300ms ease-in-out, left 300ms ease-in-out;
  z-index: 9999;
  visibility: ${p => (p.isReady ? "visible" : "hidden")};

  .logo {
    display: block;
  }

  ${p => p.theme.small} {
    
    padding: 10px 10px 30px 10px;
    /* top: ${p => p.theme.headerHeight}px; */
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    top: ${p => (p.theme.isSidebarOpen ? `${p.theme.headerHeight}px` : "110%")};
    .logo {
      display: none;
    }
    box-shadow: 4px 0 8px -2px rgba(255, 255, 255, 0.2);
  }

  ul {
    margin-top: 10px;
  }

  li {
    padding: 0;
    margin: 0;
    margin-left: -10px;
    ${p => p.theme.small} {
      margin-right: -10px;
    }
  }
  .active-nav-link {
    color: ${p => p.theme.colors.logoYellow};
  }
`;

export const Sidebar = React.memo(SidebarComponent);
