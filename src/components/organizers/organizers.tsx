import React from "react";
import styled from "styled-components";
import { Card } from "../card";
import { Justin } from "./justin";
import { Scott } from "./scott";
import { Mike } from "./mike";
import { Link } from "../link";

const organizers = [
  {
    name: "Justin Wilkerson",
    link:
      "https://www.meetup.com/long-island-javascript-group/members/50837582/",
    image: Justin,
  },
  {
    name: "Scott DeVito",
    link:
      "https://www.meetup.com/long-island-javascript-group/members/201990609/",
    image: Scott,
  },
  {
    name: "Mike Alicea",
    link:
      "https://www.meetup.com/long-island-javascript-group/members/212946534/",
    image: Mike,
  },
];

export const Organizers = () => {
  return (
    <Card title="Organizers">
      <Wrapper>
        {organizers.map((organizer, index) => {
          const colors = ["logoPurple", "logoYellow", "logoBlue"];
          const Image = organizer.image;
          return (
            <li key={organizer.name}>
              <Link href={organizer.link}>
                <OrganizerWrapper>
                  <Avatar color={colors[index]} aria-hidden={true}>
                    <Image />
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
`;
