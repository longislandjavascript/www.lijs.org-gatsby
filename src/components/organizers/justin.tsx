import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export const Justin = () => {
  const data = useStaticQuery(graphql`
    query {
      icon: file(relativePath: { eq: "organizers/justin.jpg" }) {
        childImageSharp {
          fixed(width: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return <Img fixed={data.icon.childImageSharp.fixed} />;
};
