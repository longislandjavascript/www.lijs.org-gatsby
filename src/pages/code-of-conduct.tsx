import React from "react";
import { PageProps } from "gatsby";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { Card } from "../components/card";

const CodeOfConduct: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout title="Code of Conduct">
      <SEO title="Code of Conduct" pathname={location.pathname} />
      <Card>
        <p>
          Long Island JavaScript Meetup events are dedicated to providing a{" "}
          <span>harassment-free experience for everyone</span>. We welcome and
          support people of all backgrounds and identities.
        </p>

        <p>
          This includes, but is not limited to members of any sexual
          orientation, gender identity and expression, race, ethnicity, culture,
          national origin, social and economic class, educational level, color,
          immigration status, sex, age, size, family status, political belief,
          religion, and mental and physical ability.
        </p>

        <p>
          Discriminatory or harassing language and imagery are not appropriate
          for any part of Long Island JavaScript Meetup events, including talks,
          workshops, Twitter, Slack and other online forums. People violating
          these rules may be asked to leave the Meetup and/or any future events,
          including group forums such as Slack.
        </p>

        <p>
          If you need help, or would like to report an incident, please don't
          hesitate to contact us.
        </p>
      </Card>
    </Layout>
  );
};

export default CodeOfConduct;
