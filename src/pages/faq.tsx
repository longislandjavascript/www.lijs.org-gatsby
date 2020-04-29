import React from "react";
import styled from "../theme";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { faqs } from "../data/faqs";

const Question = styled.p`
  color: ${p => p.theme.colors.logoYellow};
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-weight: 600;
`;

const Answer = styled.p`
  border-bottom: 1px solid ${p => p.theme.colors.blueDark};
  padding-bottom: 20px;
  margin-bottom: 20px;
`;

const FAQList = styled.div`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const FAQPage = ({ data }) => {
  return (
    <Layout title="FAQ">
      <SEO title="FAQ" />
      <FAQList>
        {faqs.map(({ q, a }) => {
          return (
            <li key={q}>
              <Question>{q}</Question>
              <Answer>{a}</Answer>
            </li>
          );
        })}
      </FAQList>
    </Layout>
  );
};

export default FAQPage;
