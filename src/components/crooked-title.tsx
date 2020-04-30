import React from "react";
import { css } from "styled-components";

type Props = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const CrookedTitle: React.FC<Props> = ({
  as: AAAs = "h1",
  children,
}) => {
  return (
    <h2
      className="title"
      // @ts-ignore
      css={css`
        display: inline-block;
        color: ${p => p.theme.colors.textDark};
        padding: 0.4em;
        background: ${p => p.theme.colors.logoYellow};
        transform: rotate(-4deg);
        margin: 10px 0px 20px 0px;
        text-transform: uppercase;
        font-family: Helvetica, sans-serif;
        font-weight: 700;
        box-shadow: 1px 1px 1px ${p => p.theme.colors.textDark};
      `}
    >
      {children}
    </h2>
  );
};
