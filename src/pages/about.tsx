import React from "react";
import styled from "../theme";
import { graphql } from "gatsby";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { MeetupGroup } from "../types";
import { Card } from "../components/card";
import { Organizers } from "../components/organizers/organizers";
import { Sponsors } from "../components/sponsors/sponsors";

type Props = {
  data: {
    meetupGroup: Pick<MeetupGroup, "members" | "who">;
  };
};
const AboutPage: React.FC<Props> = ({ data }) => {
  return (
    <Layout title="About LIJS">
      <SEO title="About" />
      <p>
        <span>Long Island JavaScript</span> is a group of{" "}
        <span>
          {data.meetupGroup.members} {data.meetupGroup.who}
        </span>{" "}
        in the Long Island, NY area. We meet on the <span>last Wednesday</span>{" "}
        of each month, where we discuss a range of topics around the{" "}
        <span>JavaScript ecosystem</span>.
      </p>

      <Organizers />

      <Sponsors />

      <Card title="Location">
        <p>
          Due to CoronaVirus, we are meeting virtually until further notice.
        </p>
        <iframe
          title="Map to LaunchPad Huntington"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.0286646919844!2d-73.43112128465668!3d40.871245135794986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e8287816d84b91%3A0x9a83753169b72bea!2sLaunchPad%20Huntington!5e0!3m2!1sen!2sus!4v1588010246359!5m2!1sen!2sus"
          width={700}
          height={450}
          style={{ maxWidth: "100%", border: 0 }}
          frameBorder={0}
          // allowfullscreen=""
          aria-hidden="false"
          tabIndex={0}
        ></iframe>
      </Card>
    </Layout>
  );
};

export const query = graphql`
  query MeetupGroup {
    meetupGroup(name: { eq: "Long Island JavaScript Group" }) {
      members
      who
    }
  }
`;

export default AboutPage;
