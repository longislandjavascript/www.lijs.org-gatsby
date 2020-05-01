import React from "react";
import { Layout } from "../components/layout";
import { GatsbySeo } from "gatsby-plugin-next-seo";

const NotFoundPage = () => (
  <Layout title="Got it, Thanks!">
    <GatsbySeo nofollow={true} />
    <p>One of us will get back to you as soon as possible.</p>
  </Layout>
);

export default NotFoundPage;
