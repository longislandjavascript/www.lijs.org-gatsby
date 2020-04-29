import React from "react";
import styled from "../theme";

const StyledMain = styled.main`
  background-color: ${p => p.theme.colors.blueDarkest};
  position: absolute;
  top: ${p => (p.theme.isSmall ? p.theme.headerHeight + "px" : 0)};
  left: ${p =>
    p.theme.isSidebarOpen && !p.theme.isSmall
      ? p.theme.sidebarWidth + "px"
      : 0};
  right: 0;
  transition: left 300ms, top 300ms;
  min-height: 100vh;
  padding: 30px 5%;
`;

const Container = styled.div<{ fullWidth: boolean }>`
  max-width: ${p => (p.fullWidth ? "100%" : "700px")};
`;

type Props = {
  children: React.ReactNode;
  fullWidth: boolean;
};
export const Main = ({ children, fullWidth }: Props) => {
  return (
    <StyledMain>
      <Container fullWidth={fullWidth}>{children}</Container>
    </StyledMain>
  );
};
