import React from "react";
import { PageProps, navigate } from "gatsby";
import styled from "styled-components";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const ContactPage: React.FC<PageProps> = ({ location }) => {
  const [state, setState] = React.useState({});

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  return (
    <Layout title="Contact Us">
      <SEO title="Contact Us" pathname={location.pathname} />
      <Form
        name="contact"
        data-netlify="true"
        method="POST"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
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
          onChange={handleChange}
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
          onChange={handleChange}
        />

        <input
          type="email"
          name="Email"
          required={true}
          placeholder="Your Email Address"
          aria-label="Your Email"
          onChange={handleChange}
        />
        <textarea
          rows={8}
          name="Message"
          placeholder="Your Message"
          required={true}
          aria-label="Your Message"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </Form>
    </Layout>
  );
};

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
