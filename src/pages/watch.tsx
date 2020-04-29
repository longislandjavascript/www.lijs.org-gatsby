import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Layout } from "../components/layout";
import { Show } from "../components/show";
import { SEO } from "../components/seo";
import { useWindowSize } from "react-hooks-window-size";

const WatchPage = () => {
  const [isReady, setIsReady] = useState(false);
  function markAsReady() {
    setIsReady(true);
  }
  const { height } = useWindowSize();
  return (
    <Layout title="Watch Now" fullWidth={true}>
      <SEO title="Watch Now" />
      {/* TODO: Add spinner or something */}
      <Show when={!isReady}>
        <p>Loading...</p>
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

export default WatchPage;
