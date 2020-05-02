import { createGlobalStyle } from "styled-components";

export const GlobalCss = createGlobalStyle`
html {
  font-family: "Roboto", Helvetica, Arial, Sans-Serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
  overflow-y: scroll;
}
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  font-family: "Roboto", Helvetica, Arial, Sans-Serif;
  -moz-osx-font-smoothing: grayscale;
  background-color: hsl(202, 100%, 15%);
  word-wrap: break-word;
  font-kerning: normal;
  -moz-font-feature-settings: "kern", "liga", "clig", "calt";
  -ms-font-feature-settings: "kern", "liga", "clig", "calt";
  -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
  font-feature-settings: "kern", "liga", "clig", "calt";
}

h1 {
  font-size: 1.5rem;
}

h2 {
  font-size: 1.2rem;
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

p,
a,
q,
button,
h1,
h2,
small,
blockquote,
cite,
h3 {
  color: #e6e6e6;
}



* {
  box-sizing: inherit;
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
  margin: 0;
  padding: 0;
  list-style-position: outside;
  list-style-image: none;
  list-style-type: none;
}


`;
