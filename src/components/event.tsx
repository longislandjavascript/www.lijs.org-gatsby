import React from "react";
import styled from "styled-components";
import { Card } from "../components/card";
import { Link } from "../components/link";
import { LinkButton } from "../components/link-button";
import { MeetupEvent } from "../types";
import dayjs from "dayjs";

const EventTitle = styled.h2`
  color: ${p => p.theme.colors.logoYellow};
  margin: 10px 0px;
  font-size: ${p => (p.theme.isSmall ? "1.4rem" : "1.8rem")};
  line-height: 2rem;
  font-weight: 600;
  font-family: sans-serif;
`;

const Deets = styled.span`
  display: inline-block;
  padding: 0px 10px;
  border-radius: 6px;
  background-color: ${p => p.theme.colors.blueDarkest};
  color: ${p => p.theme.colors.logoYellow};
  font-size: 14px;
  margin: 0px 0px;
  font-weight: 400;
`;

export type EventProps = {
  data: MeetupEvent;
  isNextEvent?: boolean;
};

export const Event: React.FC<EventProps> = ({ data, isNextEvent }) => {
  const date = dayjs(new Date(data.time)).format("MMMM DD, YYYY");
  return (
    <Card>
      <EventTitle> {data.name}</EventTitle>
      <Deets>
        {date} &middot; {data.venue.name}
      </Deets>

      <div dangerouslySetInnerHTML={{ __html: data.description }} />

      <LinkButton href={data.link}>
        {isNextEvent ? "RSVP" : "View"} on Meetup
      </LinkButton>
    </Card>
  );
};
