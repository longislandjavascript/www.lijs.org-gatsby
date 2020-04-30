import React from "react";
import { PageProps } from "gatsby";
import styled from "styled-components";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

const ContactPage: React.FC<PageProps> = ({ location }) => (
  <Layout title="Contact Us">
    <SEO title="Contact Us" pathname={location.pathname} />
    <Form
      name="contact"
      data-netlify="true"
      method="POST"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don’t fill this out if you're human: <input name="bot-field" />
        </label>
      </p>
      <select
        defaultValue="question"
        aria-label="Contact Reason Select Box"
        name="Reason"
      >
        <option value="question" disabled={true}>
          I have a question or suggestion
        </option>
        <option value="speaker">I'd like to speak at an LIJS event</option>
        <option value="sponsor">I'd like to sponsor LIJS</option>
        <option value="other">Something else</option>
      </select>

      <input
        type="text"
        name="Name"
        placeholder="Your Name"
        required={true}
        aria-label="Your Name"
      />

      <input
        type="email"
        name="Email"
        required={true}
        placeholder="Your Email Address"
        aria-label="Your Email"
      />
      <textarea
        rows={8}
        name="Message"
        placeholder="Your Message"
        required={true}
        aria-label="Your Message"
      />
      <button type="submit">Submit</button>
    </Form>
  </Layout>
);

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0px;
  input,
  select,
  textarea,
  button {
    border-radius: 0.5rem;
    background: ${p => p.theme.colors.blueDark};
    padding: 10px 15px;
    border: 2px solid transparent;
    outline: none;
    appearance: none;
    color: white;
    font-size: 18px;
    margin: 5px 0px;
    transition: border-color 300ms;
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    border-color: ${p => p.theme.colors.logoYellow};
  }

  button {
    background-color: ${p => p.theme.colors.logoBlue};
    cursor: pointer;
  }

  button:hover {
    opacity: 0.9;
  }

  input::placeholder,
  textarea::placeholder,
  select::placeholder {
    color: lightgray;
  }

  .hidden {
    position: absolute;
    top: -100%;
    visibility: hidden;
    height: 0px;
  }
`;

export default ContactPage;
