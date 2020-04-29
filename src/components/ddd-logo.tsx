import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export const DDDLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      icon: file(relativePath: { eq: "developer-deep-dives.png" }) {
        childImageSharp {
          fixed(width: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return <Img fixed={data.icon.childImageSharp.fixed} />;
};
