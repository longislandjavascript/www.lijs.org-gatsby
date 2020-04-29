import React from "react";
import styled from "../theme";
import { Card } from "../components/card";
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
  margin: 10px 0px;
  font-weight: 400;
`;

export type EventProps = {
  data: MeetupEvent;
};

export const Event: React.FC<EventProps> = props => {
  const date = dayjs(new Date(props.data.time)).format("MMMM DD, YYYY");
  return (
    <Card>
      <EventTitle> {props.data.name}</EventTitle>
      <Deets>
        {date} &middot; {props.data.venue.name}
      </Deets>

      <div dangerouslySetInnerHTML={{ __html: props.data.description }} />
    </Card>
  );
};
