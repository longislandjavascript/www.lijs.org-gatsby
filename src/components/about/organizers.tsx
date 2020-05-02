import React from "react";
import styled from "styled-components";
import { Card } from "../card";
import { OrganizerImage } from "./organizer-image";
import { Link } from "../link";

const organizers = [
  {
    name: "Justin Wilkerson",
    link:
      "https://www.meetup.com/long-island-javascript-group/members/50837582/",
    id: "justin",
  },
  {
    name: "Scott DeVito",
    link:
      "https://www.meetup.com/long-island-javascript-group/members/201990609/",
    id: "scott",
  },
  {
    name: "Mike Alicea",
    link:
      "https://www.meetup.com/long-island-javascript-group/members/212946534/",
    id: "mike",
  },
] as const;

export const Organizers = () => {
  return (
    <Card title="Organizers">
      <Wrapper>
        {organizers.map((organizer, index) => {
          const colors = ["logoPurple", "logoYellow", "logoBlue"];
          return (
            <li key={organizer.name}>
              <Link href={organizer.link}>
                <OrganizerWrapper>
                  <Avatar color={colors[index]} aria-hidden={true}>
                    <OrganizerImage who={organizer.id} />
                  </Avatar>

                  <p>{organizer.name}</p>
                </OrganizerWrapper>
              </Link>
            </li>
          );
        })}
      </Wrapper>
    </Card>
  );
};

const Wrapper = styled.ul`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const OrganizerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 150px;

  p {
    font-weight: 500;
    margin: 0;
  }
`;

const Avatar = styled.div<{ color: string }>`
  display: inline-block;
  border-radius: 50%;
  border: 3px solid ${p => p.theme.colors[p.color]};
  object-fit: scale-down;
  overflow: hidden;
  margin-bottom: 5px;
`;
