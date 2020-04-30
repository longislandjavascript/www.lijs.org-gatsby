import React from "react";
import styled, { css } from "styled-components";

import { Link } from "./link";

const baseStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${p => p.theme.colors.logoBlue};
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.8rem;
  color: white;
  border: 2px solid transparent;
  transition: border-color 300ms;

  ${p => p.theme.small} {
    font-size: 0.9rem;
    display: flex;
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

export const LinkButton = styled(Link)`
  ${baseStyles}
`;
