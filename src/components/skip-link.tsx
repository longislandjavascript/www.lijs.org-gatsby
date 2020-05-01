import styled from "styled-components";

export const SkipLink = styled.a`
  position: fixed;
  top: -40px;
  left: 10px;
  background: ${p => p.theme.colors.blueDarkest};
  color: ${p => p.theme.colors.textLight};
  padding: 4px;
  z-index: 99999;
  transition: top 200ms, left 200ms;
  padding: 4px;
  border-radius: 4px;
  text-decoration: none;
  outline: none;
  border: 2px solid ${p => p.theme.colors.logoYellow};

  &:focus {
    top: 10px;
    left: 10px;
  }
`;
