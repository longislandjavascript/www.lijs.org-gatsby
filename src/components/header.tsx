import React from "react";
import styled from "../theme";
import { LIJSLogo } from "./lijs-logo";
import { RiMenu4Line } from "react-icons/ri";

const StyledHeader = styled.header`
  background: ${p => p.theme.colors.blueDark};
  height: ${p => p.theme.headerHeight}px;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
`;

type Props = {
  onRequestOpenSidebar(): void;
};

export const Header: React.FC<Props> = ({ onRequestOpenSidebar }) => (
  <StyledHeader>
    <LIJSLogo type="header" />
    <MenuButton onClick={onRequestOpenSidebar} id="toggle-button" />
  </StyledHeader>
);

type MenuButtonProps = {
  onClick(): void;
  id: string;
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

const MenuButton = ({ onClick, id }: MenuButtonProps) => {
  return (
    <StyledMenuItemButton id={id} onClick={onClick}>
      <RiMenu4Line size={24} style={{ pointerEvents: "none" }} />
    </StyledMenuItemButton>
  );
};
