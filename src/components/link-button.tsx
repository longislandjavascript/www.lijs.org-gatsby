import React from "react";
import styled from "styled-components";

import { Link } from "./link";

export const LinkButton = styled(Link)`
  display: inline-block;
  background: ${p => p.theme.colors.logoBlue};
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 30px;
  font-size: 0.9rem;
`;
