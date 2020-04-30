import React from "react";
import styled from "styled-components";

import { Link } from "./link";

export const LinkButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${p => p.theme.colors.logoBlue};
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.8rem;
  color: white;

  @media (max-width: 960px) {
    display: flex;
  }

  &:hover,
  &:active,
  &:focus {
    background: ${p => p.theme.colors.logoBlue};
    opacity: 0.9;
  }
`;
