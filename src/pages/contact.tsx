import React, { useState, useRef } from "react";
import { navigate } from "gatsby-link";
import Recaptcha from "react-google-recaptcha";
import { AtomSpinner } from "react-epic-spinners";
import styled from "styled-components";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { Button } from "../components/button";

const reasons = [
  ["question", "I have a question or suggestion."],
  ["presenter", "I'd like to propose a talk."],
  ["job", "I'm looking to hire a developer."],
  ["sponsor", "I'd like to sponsor the group."],
  ["other", "Something else."],
];

const RECAPTCHA_KEY = process.env.GATSBY_APP_SITE_RECAPTCHA_KEY;
if (typeof RECAPTCHA_KEY === "undefined") {
  throw new Error(`
  Env var GATSBY_APP_SITE_RECAPTCHA_KEY is undefined! 
  You probably forget to set it in your Netlify build environment variables. 
  Make sure to get a Recaptcha key at https://www.netlify.com/docs/form-handling/#custom-recaptcha-2-with-your-own-settings
  Note this demo is specifically for Recaptcha v2
  `);
}

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const ContactPage = () => {
  const [state, setState] = useState({
    reason: "",
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const recaptchaRef = useRef();

  function handleChange(e) {
    e.persist();
    setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const form = e.target;
    // @ts-ignore
    const recaptchaValue = recaptchaRef.current.getValue();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        "g-recaptcha-response": recaptchaValue,
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }

  return (
    <Layout title="Contact Us">
      <SEO
        title="Contact Us"
        description="Have a question or suggestion for our group? Interested in presenting a talk or sponsoring us? Get in touch. We'd love to chat."
      />
      <Form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-recaptcha="true"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />

        <select
          defaultValue="presenter"
          aria-label="Contact Reason Select Box"
          name="reason"
          onChange={handleChange}
        >
          {reasons.map(reason => {
            const [value, label] = reason;
            return (
              <option key={label} value={value}>
                {label}
              </option>
            );
          })}
        </select>

        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Your Name"
          required={true}
          aria-label="Your Name"
        />

        <input
          type="email"
          name="email"
          onChange={handleChange}
          required={true}
          placeholder="Your Email Address"
          aria-label="Your Email"
        />
        <textarea
          rows={8}
          name="message"
          onChange={handleChange}
          placeholder="Your Message"
          required={true}
          aria-label="Your Message"
        />

        <Recaptcha
          ref={recaptchaRef}
          sitekey={RECAPTCHA_KEY}
          size="invisible"
        />

        <Button type="submit">
          {loading ? (
            <AtomSpinner color="hsl(210, 100%, 20%)" size={30} />
          ) : (
            "Submit"
          )}
        </Button>
        {error && (
          <p>
            Oops..something went wrong. Please try again or contact us directly
            on the Meetup website. Sorry about that!
          </p>
        )}
      </Form>
    </Layout>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin: 0px;
  input,
  select,
  textarea {
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
  textarea:focus {
    border-color: ${p => p.theme.colors.logoYellow};
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
