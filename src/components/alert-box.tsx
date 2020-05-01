import React from "react";
import styled from "styled-components";
import { IoMdMedical } from "react-icons/io";

const StyledAlertBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 20px 0px 20px;
  background: ${p => p.theme.colors.blueDarkest};
  border-radius: ${p => p.theme.borderRadius};
  color: ${p => p.theme.colors.logoYellow};
  p {
    font-size: 0.9rem;
    font-weight: 600;
    color: ${p => p.theme.colors.logoYellow};
    margin-top: 10px;
  }
`;

export const AlertBox: React.FC = ({ children }) => {
  return (
    <StyledAlertBox>
      <IoMdMedical />
      <p>{children}</p>
    </StyledAlertBox>
  );
};
