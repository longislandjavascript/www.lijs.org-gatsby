import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { Event } from "../components/event";
import { CountdownClock } from "../components/countdown-clock";
import { MeetupEvent } from "../types";

interface Props {
  data: {
    allMeetupEvent: {
      nodes: MeetupEvent[];
    };
  };
}

const IndexPage: React.FC<Props> = ({ data }) => {
  const nextEvent = data.allMeetupEvent.nodes[0];

  // const secondsRemaining =
  //   (+nextEvent.time + nextEvent.utc_offset - new Date().getTime()) / 1000;

  const secondsRemaining = (+nextEvent.time - new Date().getTime()) / 1000;

  return (
    <Layout title="Next Event">
      <SEO />
      <CountdownClock secondsRemaining={secondsRemaining} />
      <br />
      <Event data={nextEvent} isNextEvent={true} />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query nextEvent {
    allMeetupEvent {
      nodes {
        name
        description
        time
        utc_offset
        yes_rsvp_count
        link
        venue {
          name
        }
      }
    }
  }
`;
