import React, { useState } from "react";
import styled from "styled-components";
import { FaMeetup } from "react-icons/fa";
import { Card } from "./card";
import { Show } from "./show";

import { LinkButton } from "../components/link-button";
import { MeetupEvent } from "../types";
import dayjs from "dayjs";

export type EventProps = {
  data: MeetupEvent;
  isNextEvent?: boolean;
};

export const Event: React.FC<EventProps> = ({ data, isNextEvent }) => {
  const [viewDescription, setViewDescription] = useState(isNextEvent);
  function toggleViewDescription() {
    setViewDescription(o => !o);
  }
  const date = dayjs(new Date(data.time)).format("MMMM DD, YYYY");
  return (
    <Card title={date} subTitle={data.venue.name}>
      <EventTitle> {data.name}</EventTitle>

      {viewDescription && (
        <div dangerouslySetInnerHTML={{ __html: data.description }} />
      )}

      <Show when={!isNextEvent && !viewDescription}>
        <ViewDescriptionButton onClick={toggleViewDescription}>
          View Description
        </ViewDescriptionButton>
      </Show>

      <LinkButton href={data.link}>
        <FaMeetup size={20} style={{ marginRight: "5px" }} />
        {isNextEvent ? "RSVP" : "View"} on Meetup
      </LinkButton>
    </Card>
  );
};

const EventTitle = styled.h2`
  color: ${p => p.theme.colors.logoYellow};
  margin: 10px 0px 5px 0px;
  font-size: 1.8rem;
  line-height: 2rem;
  font-weight: 600;
  font-family: sans-serif;

  ${p => p.theme.small} {
    font-size: 1.4rem;
    line-height: 1.6rem;
  }
`;

const ViewDescriptionButton = styled.button`
  display: block;
  background: none;
  border: none;
  cursor: pointer;
  margin: 10px 0px;

  &:hover,
  &:active,
  &:focus {
    text-decoration: underline;
  }
`;
