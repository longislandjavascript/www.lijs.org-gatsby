import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 20px;
  color: ${p => p.theme.colors.textLight};

  span {
    flex-grow: 0;
    max-width: 180px;
    font-size: ${p => (p.theme.isSmall ? "20px" : "22px")};
    font-weight: 600;
    line-height: 1.2;
    margin-left: 10px;
  }
`;

type Props = {
  type: "sidebar" | "header";
};

export const LIJSLogo: React.FC<Props> = ({ type }) => {
  const isForHeader = type === "header";
  const data = useStaticQuery(graphql`
    query {
      sidebarLogo: file(relativePath: { eq: "lijs-logo.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      headerLogo: file(relativePath: { eq: "lijs-logo.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const img = isForHeader
    ? data.headerLogo.childImageSharp.fixed
    : data.sidebarLogo.childImageSharp.fixed;

  return (
    <Wrapper>
      <div aria-hidden="true">
        <Img fixed={img} />
      </div>

      <span>Long Island JavaScript Meetup</span>
    </Wrapper>
  );
};
