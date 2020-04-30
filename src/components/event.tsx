import React, { useState } from "react";
import styled from "styled-components";
import { FaMeetup } from "react-icons/fa";
import { Card } from "./card";
import { Show } from "./show";
import { Button } from "../components/button";

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

      <ButtonWrapper>
        <LinkButton href={data.link}>
          <FaMeetup size={20} style={{ marginRight: "5px" }} />
          {isNextEvent ? "RSVP" : "View"} on Meetup
        </LinkButton>
        <Show when={!isNextEvent && !viewDescription}>
          <Button className="description" onClick={toggleViewDescription}>
            View Description
          </Button>
        </Show>
      </ButtonWrapper>
    </Card>
  );
};

const EventTitle = styled.h2`
  color: ${p => p.theme.colors.logoYellow};
  margin: 10px 0px 5px 0px;
  font-size: 1.6rem;
  line-height: 2rem;
  font-weight: 600;

  ${p => p.theme.small} {
    font-size: 1.4rem;
    line-height: 1.6rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;

  .description {
    margin-left: 10px;
  }

  ${p => p.theme.small} {
    .description {
      margin-left: 0px;
    }
  }
`;
