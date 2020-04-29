import React, { useState } from "react";
import styled from "../theme";
import { useTheme } from "emotion-theming";
import ReactPlayer from "react-player";
import { Layout } from "../components/layout";
import { Show } from "../components/show";
import { SEO } from "../components/seo";
import { useWindowSize } from "react-hooks-window-size";
import { AtomSpinner } from "react-epic-spinners";

const WatchPage = () => {
  const { isSmall } = useTheme();
  const [isReady, setIsReady] = useState(false);
  function markAsReady() {
    setIsReady(true);
  }
  const { height } = useWindowSize();
  return (
    <Layout title="Watch Now" fullWidth={true}>
      <SEO title="Watch Now" />
      <Show when={!isReady}>
        <SpinnerOverlay>
          <AtomSpinner color="hsl(202, 100%, 20%)" size={isSmall ? 300 : 500} />
        </SpinnerOverlay>
      </Show>

      <ReactPlayer
        onReady={markAsReady}
        width="100%"
        height={height - 200 + "px"}
        url="https://www.twitch.tv/longislandjavascript"
        playing
      />
    </Layout>
  );
};

const SpinnerOverlay = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default WatchPage;
