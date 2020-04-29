import styled, { CreateStyled } from "@emotion/styled";

export const theme = {
  colors: {
    logoBlue: "hsla(216, 90%, 54%, 1)",
    logoPurple: "hsla(270, 90%, 54%, 1)",
    logoYellow: "hsla(51, 99%, 45%, 1)",
    blueDark: "hsl(202, 100%, 20%)",
    blueDarkest: "hsl(202, 100%, 15%)",
    textDark: "#333",
    textLight: "#f8f8f8",
  },
  isSmall: false,
  sidebarWidth: 300,
  headerHeight: 75,
} as const;

export default styled as CreateStyled<typeof theme>;
