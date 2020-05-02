import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

type Props = {
  who?: "oreilly" | "launchpad";
};

export const SponsorImage = ({ who }: Props) => {
  const data = useStaticQuery(graphql`
    query {
      oreilly: file(relativePath: { eq: "sponsors/oreilly.png" }) {
        childImageSharp {
          fixed(width: 180) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      launchpad: file(relativePath: { eq: "sponsors/launchpad.png" }) {
        childImageSharp {
          fixed(width: 180) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  const img = data[who];
  return <Img fixed={img.childImageSharp.fixed} />;
};
