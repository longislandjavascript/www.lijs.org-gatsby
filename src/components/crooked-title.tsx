/**@jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

type Props = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const CrookedTitle: React.FC<Props> = ({ as: As = "h1", children }) => {
  return (
    <As
      className="title"
      css={theme => css`
        display: inline-block;
        color: ${theme.colors.textDark};
        padding: 0.4em;
        background: ${theme.colors.logoYellow};
        transform: rotate(-4deg);
        margin: 10px 0px 20px 0px;
        text-transform: uppercase;
        font-family: Helvetica, sans-serif;
        font-weight: 700;
        box-shadow: 1px 1px 1px ${theme.colors.textDark};
      `}
    >
      {children}
    </As>
  );
};
