import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export const OReilly = () => {
  const data = useStaticQuery(graphql`
    query {
      icon: file(relativePath: { eq: "sponsors/oreilly.png" }) {
        childImageSharp {
          fixed(width: 180) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return <Img fixed={data.icon.childImageSharp.fixed} />;
};
