import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export const DDDIcon = () => {
  const data = useStaticQuery(graphql`
    query {
      icon: file(relativePath: { eq: "ddd/developer-deep-dives-icon.png" }) {
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
