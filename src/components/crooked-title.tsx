import React from "react";
import { css } from "styled-components";

type Props = {
  as?: "h1" | "h2";
};

export const CrookedTitle: React.FC<Props> = ({ as = "h1", children }) => {
  const styles = css`
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
  `;
  if (as === "h1") {
    return (
      <h1 className="title" css={styles}>
        {children}
      </h1>
    );
  } else {
    return (
      <h2 className="title" css={styles}>
        {children}
      </h2>
    );
  }
};
