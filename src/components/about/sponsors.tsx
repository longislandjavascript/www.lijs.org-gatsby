import React from "react";
import styled from "styled-components";
import { Card } from "../card";
import { Link } from "../link";
import { SponsorImage } from "./sponsor-image";

const sponsorsData = [
  {
    name: "O'Reilly Media",
    link: "https://www.oreilly.com/",
    id: "oreilly",
  },
  {
    name: "LaunchPad Huntington",
    link: "https://launchpadhuntington.com/",
    id: "launchpad",
  },
] as const;

export const Sponsors = () => {
  return (
    <Card title="Sponsors">
      <Wrapper>
        {sponsorsData.map(sponsor => {
          return (
            <li key={sponsor.name}>
              <Link href={sponsor.link}>
                <SponsorWrapper>
                  <SponsorImage who={sponsor.id} />
                </SponsorWrapper>
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

const SponsorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 150px;
`;
