import { createGlobalStyle } from "styled-components";

export const GlobalCss = createGlobalStyle`
html {
  font-family: "Roboto", Helvetica, Arial, Sans-Serif;
  word-wrap: break-word;
}
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: hsl(202, 100%, 15%);
  color: #e6e6e6;
}

a {
  color: ${p => p.theme.colors.textLight};
}

p {
  font-size: 1.1rem;
  line-height: 1.5;
  font-weight: 400;
}

p span {
  color: hsla(51, 99%, 45%, 1);
  font-weight: 700;
}

* {
  box-sizing: border-box;
}

*:before {
  box-sizing: inherit;
}
*:after {
  box-sizing: inherit;
}

img {
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
}

ul {
  list-style-type: none;
}

`;
