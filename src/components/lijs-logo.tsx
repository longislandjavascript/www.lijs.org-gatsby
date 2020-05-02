import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 20px;
  color: ${p => p.theme.colors.textLight};
  ${p => p.theme.small} {
    padding: 0px 10px;
  }

  span {
    flex-grow: 0;
    max-width: 180px;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.2;
    margin-left: 10px;

    ${p => p.theme.small} {
      font-size: 21px;
      span.js {
        font-size: 23px;
      }
    }
  }

  span.js {
    font-size: 26px;
    margin-left: 0px;
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
          fixed(width: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      headerLogo: file(relativePath: { eq: "lijs-logo.png" }) {
        childImageSharp {
          fixed(width: 55) {
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

      <span>
        Long Island <span className="js">JavaScript</span>
      </span>
    </Wrapper>
  );
};
