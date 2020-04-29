import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export const Scott = () => {
  const data = useStaticQuery(graphql`
    query {
      icon: file(relativePath: { eq: "organizers/scott.jpg" }) {
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
