import React from "react";
import { css } from "styled-components";
import { Link as GatsbyLink } from "gatsby";

const baseStyles = css`
  display: block;
  padding: 20px;
  border-radius: ${p => p.theme.borderRadius};
  text-decoration: none;
  cursor: pointer;
  outline: none;
  transition: background-color 300ms;
  &:hover,
  &:focus {
    background-color: ${p =>
      p.theme.isSmall
        ? p.theme.colors.blueDarkest
        : p.theme.colors.blueDarkest};
  }
`;
type Props = {
  to?: string;
  href?: string;
  className?: string;
  activeClassName?: string;
  tabIndex?: number;
};
export const Link: React.FC<Props> = ({
  to,
  href,
  children,
  className,
  activeClassName,
  tabIndex = 0,
}) => {
  if (to) {
    return (
      <GatsbyLink
        to={to}
        css={baseStyles}
        className={className}
        activeClassName={activeClassName}
        tabIndex={tabIndex}
      >
        {children}
      </GatsbyLink>
    );
  } else {
    return (
      <a
        href={href}
        css={baseStyles}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        tabIndex={tabIndex}
      >
        {children}
      </a>
    );
  }
};
