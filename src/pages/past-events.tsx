import React from "react";
import { graphql, PageProps } from "gatsby";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { Event } from "../components/event";
import { MeetupEvent } from "../types";

interface Props extends PageProps {
  data: {
    allMeetupEvent: {
      nodes: MeetupEvent[];
    };
  };
}

const PastEventsPage: React.FC<Props> = ({ data, location }) => {
  return (
    <Layout title="Past Events">
      <SEO title="Past Events" pathname={location.pathname} />
      {data.allMeetupEvent.nodes.map(event => {
        return <Event key={event.time} data={event} />;
      })}
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
        utc_offset
        venue {
          name
        }
      }
    }
  }
`;
