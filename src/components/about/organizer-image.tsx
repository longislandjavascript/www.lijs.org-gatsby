import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

type Props = {
  who: "justin" | "scott" | "mike";
};

export const OrganizerImage = ({ who }: Props) => {
  const data = useStaticQuery(graphql`
    query {
      justin: file(relativePath: { eq: "organizers/justin.jpg" }) {
        childImageSharp {
          fixed(width: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      scott: file(relativePath: { eq: "organizers/scott.jpg" }) {
        childImageSharp {
          fixed(width: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      mike: file(relativePath: { eq: "organizers/mike.jpg" }) {
        childImageSharp {
          fixed(width: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const img = data[who];

  return <Img fixed={img.childImageSharp.fixed} />;
};
