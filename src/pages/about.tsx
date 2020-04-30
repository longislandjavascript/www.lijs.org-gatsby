import React from "react";
import { graphql, PageProps } from "gatsby";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { MeetupGroup } from "../types";
import { Card } from "../components/card";
import { Organizers } from "../components/organizers/organizers";
import { Sponsors } from "../components/sponsors/sponsors";
import { LocationMap } from "../components/location-map";
import { AlertBox } from "../components/alert-box";

interface Props extends PageProps {
  data: {
    meetupGroup: Pick<MeetupGroup, "members" | "who">;
  };
}
const AboutPage: React.FC<Props> = ({ data, location }) => {
  return (
    <Layout title="About Us">
      <SEO title="About LIJS" pathname={location.pathname} />
      <Card>
        <p>
          <span>Long Island JavaScript</span> is a group of{" "}
          <span>
            {data.meetupGroup.members} {data.meetupGroup.who}
          </span>{" "}
          in the Long Island, NY area. We meet on the{" "}
          <span>last Wednesday of each month</span> , where we discuss a range
          of topics around the <span>JavaScript ecosystem</span>.
        </p>
      </Card>

      <Organizers />

      <Sponsors />

      <Card title="Location">
        <br />
        <AlertBox>
          Due to CoronaVirus, we are meeting virtually until further notice.
        </AlertBox>
        <br />
        <LocationMap />
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
