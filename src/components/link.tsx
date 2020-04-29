/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import { Link as GatsbyLink } from "gatsby";

const baseStyles = theme => css`
  display: block;
  padding: 20px;
  border-radius: 2em;
  text-decoration: none;
  outline: none;
  transition: background-color 300ms;
  &:hover,
  &:focus {
    background-color: ${theme.isSmall
      ? theme.colors.blueDarkest
      : theme.colors.blueDarkest};
  }
`;

type Props = {
  to?: string;
  href?: string;
  className?: string;
  activeClassName?: string;
};
export const Link: React.FC<Props> = ({
  to,
  href,
  children,
  className,
  activeClassName,
}) => {
  if (to) {
    return (
      <GatsbyLink
        to={to}
        css={baseStyles}
        className={className}
        activeClassName={activeClassName}
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
      >
        {children}
      </a>
    );
  }
};
