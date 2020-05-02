import React from "react";
import styled from "styled-components";
import { FaExclamationTriangle } from "react-icons/fa";

const StyledAlertBox = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: ${p => p.theme.colors.blueDarkest};
  border-radius: ${p => p.theme.borderRadius};
  color: ${p => p.theme.colors.logoYellow};
  p {
    font-size: 0.9rem;
    margin-left: 10px;
    font-weight: 600;
    color: ${p => p.theme.colors.logoYellow};
  }

  .icon {
    font-size: 20px;
    ${p => p.theme.small} {
      font-size: 40px;
    }
  }
`;

export const AlertBox: React.FC = ({ children }) => {
  return (
    <StyledAlertBox>
      <FaExclamationTriangle className="icon" />
      <p>{children}</p>
    </StyledAlertBox>
  );
};
