import { createGlobalStyle } from "styled-components";

export const GlobalCss = createGlobalStyle`
html {
  font-family: Helvetica, Arial, Sans-Serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
  overflow-y: scroll;
}
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
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
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 500;
}

p span {
  color: hsla(51, 99%, 45%, 1);
  font-weight: 700;
}

p,
a,
button,
h1,
h2,
h3 {
  color: #e6e6e6;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
  display: block;
}
audio,
canvas,
progress,
video {
  display: inline-block;
}
audio:not([controls]) {
  display: none;
  height: 0;
}
progress {
  vertical-align: baseline;
}
[hidden],
template {
  display: none;
}
a {
  /* background-color: transparent; */
  -webkit-text-decoration-skip: objects;
}
a:active,
a:hover {
  outline-width: 0;
}

img {
  border-style: none;
}
svg:not(:root) {
  overflow: hidden;
}

figure {
  margin: 1em 40px;
}
hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}
button,
input,
optgroup,
select,
textarea {
  font: inherit;
  margin: 0;
}
optgroup {
  font-weight: 700;
}
button,
input {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
[type="reset"],
[type="submit"],
button,
html [type="button"] {
  -webkit-appearance: button;
}
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner,
button::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring,
button:-moz-focusring {
  outline: 1px dotted ButtonText;
}

textarea {
  overflow: auto;
}
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-input-placeholder {
  color: inherit;
  opacity: 0.54;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
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
ol {
  margin-left: 1.45rem;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  list-style-position: outside;
  list-style-image: none;
}

tt,
code {
  background-color: hsla(0, 0%, 0%, 0.04);
  border-radius: 3px;
  font-family: "SFMono-Regular", Consolas, "Roboto Mono", "Droid Sans Mono",
    "Liberation Mono", Menlo, Courier, monospace;
  padding: 0;
  padding-top: 0.2em;
  padding-bottom: 0.2em;
}
pre code {
  background: none;
  line-height: 1.42;
}
code:before,
code:after,
tt:before,
tt:after {
  letter-spacing: -0.2em;
  content: " ";
}
pre code:before,
pre code:after,
pre tt:before,
pre tt:after {
  content: "";
}
@media only screen and (max-width: 480px) {
  html {
    font-size: 100%;
  }
}

`;
