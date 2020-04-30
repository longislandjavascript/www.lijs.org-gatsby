import styled from "styled-components";

export const SkipLink = styled.a`
  position: fixed;
  top: -40px;
  left: 0;
  background: ${p => p.theme.colors.logoBlue};
  color: white;
  padding: 4px;
  z-index: 99999;

  &:focus {
    top: 0;
  }
`;
