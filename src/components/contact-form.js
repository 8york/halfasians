import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { form, label, input, textarea, submit } from "./contact.module.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("mpzgwelq");
  if (state.succeeded) {
    return <p>Thank you for your contact!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button type="submit" disabled={state.submitting}>
        submit
      </button>
      <ValidationError errors={state.errors} />
    </form>
  );
}

export default ContactForm;
