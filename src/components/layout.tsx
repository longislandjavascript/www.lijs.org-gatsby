import { GlobalCss } from "./global-css";
import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import * as _ from "styled-components/cssprop";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { Main } from "./main";
import { Show } from "./show";
import { SkipLink } from "./skip-link";
import { CrookedTitle } from "./crooked-title";
import { useClickOutside } from "../hooks/use-click-outside";
import { useWindowSize } from "react-hooks-window-size";

import "typeface-roboto";

type Props = {
  title: string;
  fullWidth?: boolean;
};

export const Layout: React.FC<Props> = ({ children, title, fullWidth }) => {
  const [ready, setReady] = useState(false);
  const { width } = useWindowSize(1280, 1080);
  const isSmall = useMemo(() => width < 960, [width]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  function toggleSidebar() {
    setIsSidebarOpen(o => !o);
  }

  useEffect(
    function toggleSidebarOnWidthChange() {
      setIsSidebarOpen(!isSmall);
      setReady(true);
    },
    [isSmall]
  );

  const ref = useClickOutside(e => {
    // @ts-ignore
    if (isSmall && isSidebarOpen && e.target.id !== "toggle-button") {
      toggleSidebar();
    }
  });

  return (
    <ThemeProvider theme={{ ...theme, isSmall, isSidebarOpen }}>
      <GlobalCss />
      <SkipLink href="#main-content">Skip to main content</SkipLink>

      <Show when={isSmall}>
        <Header
          onRequestOpenSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
      </Show>

      <Sidebar forwardRef={ref} isOpen={isSidebarOpen} />

      <Main fullWidth={fullWidth} id="main-content">
        <Show when={ready}>
          <CrookedTitle>{title}</CrookedTitle>
          <div style={{ marginTop: "25px" }}>{children}</div>
        </Show>
      </Main>
    </ThemeProvider>
  );
};
