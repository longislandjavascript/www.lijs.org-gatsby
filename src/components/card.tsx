import React from "react";
import styled from "../theme";
import { Show } from "./show";
import { CrookedTitle } from "./crooked-title";

type Props = {
  title?: string;
};

const StyledCard = styled.div`
  background-color: ${p => p.theme.colors.blueDark};
  border-radius: ${p => p.theme.borderRadius};
  max-width: 100%;
  padding: 20px;
  overflow-y: scroll;
  margin-bottom: 20px;
`;

const TitleWrapper = styled.div`
  text-align: ${p => (p.theme.isSmall ? "center" : "left")};
`;

export const Card: React.FC<Props> = ({ children, title }) => {
  return (
    <StyledCard>
      <Show when={!!title}>
        <TitleWrapper>
          <CrookedTitle as="h2">{title}</CrookedTitle>
        </TitleWrapper>
      </Show>

      {children}
    </StyledCard>
  );
};
