import React from "react";
import styled from "styled-components";
import { LIJSLogo } from "./lijs-logo";
import { RiMenu4Line } from "react-icons/ri";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: ${p => p.theme.colors.blueDark};
  height: ${p => p.theme.headerHeight}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
  z-index: 9999;
`;

type Props = {
  onRequestOpenSidebar(): void;
  isSidebarOpen: boolean;
};

export const Header: React.FC<Props> = ({
  onRequestOpenSidebar,
  isSidebarOpen,
}) => (
  <StyledHeader>
    <LIJSLogo type="header" />
    <MenuButton
      onClick={onRequestOpenSidebar}
      id="toggle-button"
      isSidebarOpen={isSidebarOpen}
    />
  </StyledHeader>
);

type MenuButtonProps = {
  onClick(): void;
  id: string;
  isSidebarOpen: boolean;
};

const StyledMenuItemButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 10px;
  background: transparent;
  border: none;
  transition: background-color 300ms;
  outline: none;
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.blueDarkest};
  }
`;

const MenuButton = ({ onClick, id, isSidebarOpen }: MenuButtonProps) => {
  return (
    <StyledMenuItemButton
      id={id}
      onClick={onClick}
      aria-expanded={isSidebarOpen}
      aria-pressed={isSidebarOpen}
      aria-label="Menu Toggle"
    >
      <RiMenu4Line size={24} style={{ pointerEvents: "none" }} />
    </StyledMenuItemButton>
  );
};
