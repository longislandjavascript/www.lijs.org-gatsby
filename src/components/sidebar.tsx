import React from "react";
import { useTheme } from "emotion-theming";
import { FaExternalLinkAlt } from "react-icons/fa";
import styled from "../theme";
import { LIJSLogo } from "./lijs-logo";
import { Link } from "./link";
import { Show } from "./show";
import { links } from "../data/sidebar-links";

const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  border-radius: 0 3em 3em 0;
  margin: 0;
  padding: 8px 20px;
  font-weight: 600;
  font-size: 0.9rem;

  span {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const StyledAside = styled.aside<{ isOpen: boolean }>`
  width: ${p => p.theme.sidebarWidth}px;
  overflow: hidden;
  padding: 10px;
  background: ${p => p.theme.colors.blueDark};
  position: fixed;
  top: ${p => (p.theme.isSmall ? p.theme.headerHeight + "px" : "0px")};
  bottom: 0;
  left: ${p => (p.isOpen ? 0 : "-100%")};
  transition: left 300ms ease-in-out;
  z-index: 9999;
  box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.2);
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

export type SidebarProps = {
  isOpen: boolean;
  forwardRef: any;
};

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, forwardRef }) => {
  const { isSmall } = useTheme();

  return (
    <StyledAside isOpen={isOpen} ref={forwardRef}>
      <ul>
        <Show when={!isSmall}>
          <li>
            <LIJSLogo type="sidebar" />
          </li>
          <br />
        </Show>

        {links.map(link => {
          const [label, to, Icon] = link;
          const isAnchor = to.includes("http");
          return (
            <li key={label}>
              <SidebarLink
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
