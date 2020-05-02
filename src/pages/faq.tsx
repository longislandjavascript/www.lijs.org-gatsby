import React from "react";
import styled from "styled-components";
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

const FAQPage = () => {
  return (
    <Layout title="FAQ">
      <SEO
        title="Frequently Asked Questions"
        description="You have questions. And hopefully we have your answer. If not, please feel free to contact us."
      />

      <FAQList>
        {faqs.map(({ question, answer }) => {
          return (
            <li key={question}>
              <Question>{question}</Question>
              <Answer>{answer}</Answer>
            </li>
          );
        })}
      </FAQList>
    </Layout>
  );
};

export default FAQPage;
