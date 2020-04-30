import { css } from "styled-components";

export const baseButtonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${p => p.theme.colors.logoBlue};
  font-weight: 600;
  height: 38px;
  padding: 8px 10px;
  border-radius: 6px;
  font-size: 14px;
  color: white;
  border: 2px solid transparent;
  transition: border-color 300ms;
  cursor: pointer;
  margin: 10px 0px;

  ${p => p.theme.small} {
    display: flex;
    width: 100%;
    padding: 10px 10px;
  }

  &:hover,
  &:active,
  &:focus {
    background: ${p => p.theme.colors.logoBlue};
    opacity: 0.9;
    border-color: ${p => p.theme.colors.logoYellow};
  }
`;
