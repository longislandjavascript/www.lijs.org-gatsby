import React from "react";
import styled from "../../theme";
import { Card } from "../card";
import { Link } from "../link";
import { LaunchPad } from "./launchpad";
import { OReilly } from "./oreilly";

const sponsorsData = [
  {
    name: "O'Reilly Media",
    link: "https://www.oreilly.com/",
    image: OReilly,
  },
  {
    name: "LaunchPad Huntington",
    link: "https://launchpadhuntington.com/",
    image: LaunchPad,
  },
];

export const Sponsors = () => {
  return (
    <Card title="Sponsors">
      <Wrapper>
        {sponsorsData.map(sponsor => {
          const Image = sponsor.image;
          return (
            <Link key={sponsor.name} href={sponsor.link}>
              <SponsorWrapper>
                <Image />
              </SponsorWrapper>
            </Link>
          );
        })}
      </Wrapper>
    </Card>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const SponsorWrapper = styled.div`
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
