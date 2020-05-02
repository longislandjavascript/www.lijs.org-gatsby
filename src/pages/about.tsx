import React from "react";
import { graphql } from "gatsby";
import { MeetupGroup } from "../types";

// Components
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import {
  About,
  Reviews,
  Organizers,
  Location,
  Sponsors,
} from "../components/about";

interface Props {
  data: {
    meetupGroup: Pick<MeetupGroup, "members" | "who">;
  };
}
const AboutPage: React.FC<Props> = ({ data }) => {
  return (
    <Layout title="About Us">
      <SEO
        title="About Long Island JavaScript"
        description="Everything you want to know about the Long Island JavaScript Meetup."
      />
      <About count={data.meetupGroup.members} name={data.meetupGroup.who} />
      <Reviews />
      <Organizers />
      <Sponsors />
      <Location />
    </Layout>
  );
};

export const query = graphql`
  query MeetupGroup {
    meetupGroup(name: { eq: "Long Island JavaScript" }) {
      members
      who
    }
  }
`;

export default AboutPage;
