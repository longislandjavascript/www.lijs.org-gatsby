import React from "react";
import styled from "styled-components";
import { Show } from "./show";
import { CrookedTitle } from "./crooked-title";

type Props = {
  title?: string;
  subTitle?: string;
};

export const Card: React.FC<Props> = ({ children, title, subTitle }) => {
  return (
    <StyledCard>
      <Show when={!!title}>
        <TitleWrapper>
          <CrookedTitle as="h2">
            <CrookedTitleFlexContainer>
              <span>{title}</span>
              <span className="subtitle">{subTitle}</span>
            </CrookedTitleFlexContainer>
          </CrookedTitle>
        </TitleWrapper>
      </Show>

      {children}
    </StyledCard>
  );
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
  text-align: left;
  ${p => p.theme.small} {
    text-align: center;
  }
`;

const CrookedTitleFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .subtitle {
    font-size: 12px;
    text-transform: capitalize;
  }
`;
