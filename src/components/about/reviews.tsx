import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Card } from "../card";
import { reviews } from "../../data/reviews";

export const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(i => {
        if (i >= reviews.length - 1) {
          return 0;
        } else {
          return i + 1;
        }
      });
    }, 7500);
    return () => clearInterval(interval);
  }, []);

  const [member, message] = reviews[currentIndex];

  return (
    <Card title="Reviews">
      <Wrapper>
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
