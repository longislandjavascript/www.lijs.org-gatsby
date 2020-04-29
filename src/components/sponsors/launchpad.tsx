import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export const LaunchPad = () => {
  const data = useStaticQuery(graphql`
    query {
      icon: file(relativePath: { eq: "sponsors/launchpad.png" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return <Img fixed={data.icon.childImageSharp.fixed} />;
};
