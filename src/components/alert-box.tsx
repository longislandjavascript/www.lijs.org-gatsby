import React from "react";
import styled from "styled-components";
import { FaExclamationTriangle } from "react-icons/fa";

const StyledAlertBox = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 10px;
  background: ${p => p.theme.colors.blueDarkest};
  border-radius: ${p => p.theme.borderRadius};
  color: ${p => p.theme.colors.logoYellow};
  span {
    padding-left: 10px;
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

export const AlertBox: React.FC = ({ children }) => {
  return (
    <StyledAlertBox>
      <FaExclamationTriangle />
      <span>{children}</span>
    </StyledAlertBox>
  );
};
