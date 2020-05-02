import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Card } from "./card";

export const reviewsData = [
  [
    "Danika Wiegand",
    "My first meeting was very informative - I look forward to the next one! Great people",
  ],
  ["Michael Boracci", "Great"],
  ["Chris Early", "Excellent community!"],
  ["Yujin Lin", "Very good. People are friendly and all have good spirit."],
  ["Anthony Alvarez", "Great!"],
  ["John Rattinger", "So far, so good... My first meeting but i will be back!"],
  [
    "Scott DeVito (future organizer)",
    "Informative and welcoming. Will definitely be back next month.",
  ],
];

export const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(i => {
        if (i >= reviewsData.length - 1) {
          return 0;
        } else {
          return i + 1;
        }
      });
    }, 7500);
    return () => clearInterval(interval);
  }, []);

  const [member, message] = reviewsData[currentIndex];

  return (
    <Card title="Reviews">
      <Wrapper key="wrapper">
        <q>{message}</q>
        <br />
        <small>- {member}</small>
      </Wrapper>
    </Card>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px 0px;
  min-height: 110px;
  border-left: 3px solid ${p => p.theme.colors.blueDarkest};
  padding: 8px;

  q {
    font-size: 20px;
    font-weight: 500;
  }

  small {
    display: inline-block;
    margin-top: 2px;
    font-size: 14px;
    color: ${p => p.theme.colors.logoYellow};
  }
`;
