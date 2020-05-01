import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { Event } from "../components/event";
import { LinkButton } from "../components/link-button";

import { MeetupEvent } from "../types";
import { FaMeetup } from "react-icons/fa";

interface Props {
  data: {
    allMeetupEvent: {
      nodes: MeetupEvent[];
    };
  };
}

const PastEventsPage: React.FC<Props> = ({ data }) => {
  return (
    <Layout title="Past Events">
      <SEO
        title="Past Events"
        description="We've been learning about JavaScript together since 2015. Take a look at our past events at all the ground we covered."
      />
      {data.allMeetupEvent.nodes.map(event => {
        return <Event key={event.id} data={event} />;
      })}
      <LinkButton href="https://www.meetup.com/long-island-javascript-group/events/past/">
        <FaMeetup size={20} style={{ marginRight: "5px" }} />
        View older events on Meetup
      </LinkButton>
    </Layout>
  );
};

export default PastEventsPage;

export const query = graphql`
  query pastEvents {
    allMeetupEvent(filter: { status: { eq: "past" } }) {
      nodes {
        name
        description
        time
        id
        link
        utc_offset
        venue {
          name
        }
      }
    }
  }
`;
