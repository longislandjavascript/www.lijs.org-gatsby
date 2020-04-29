import React from "react";
import styled from "../theme";
import { Show } from "./show";
import { CrookedTitle } from "./crooked-title";

type Props = {
  title?: string;
};

const StyledCard = styled.div`
  background-color: ${p => p.theme.colors.blueDark};
  border-radius: 1.5em;
  max-width: 100%;
  padding: 20px;
  overflow-y: scroll;
  margin-bottom: 20px;
`;

export const Card: React.FC<Props> = ({ children, title }) => {
  return (
    <StyledCard>
      <Show when={!!title}>
        <CrookedTitle as="h2">{title}</CrookedTitle>
      </Show>

      {children}
    </StyledCard>
  );
};
