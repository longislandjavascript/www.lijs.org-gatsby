import React from "react";
import { Card } from "../card";

type Props = {
  count: number;
  name: string;
};

export const About = ({ count, name }: Props) => {
  return (
    <div>
      <p>
        <span>Long Island JavaScript</span> is a group of{" "}
        <span>
          {count} {name}
        </span>{" "}
        in the Long Island, NY area. We meet on the{" "}
        <span>last Wednesday of each month</span> , where we discuss a range of
        topics around the <span>JavaScript ecosystem</span>.
      </p>
    </div>
  );
};
