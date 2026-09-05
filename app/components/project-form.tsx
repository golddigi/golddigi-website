"use client";

import { useId, useState, type FormEvent } from "react";
import { Icon } from "./icons";
import { siteContact, whatsappLink } from "../site-config";
import styles from "./project-form.module.css";

type ProjectFormProps = {
  contactEmail?: string;
  bookingUrl?: string;
};

const services = [
  "Custom website",
  "Google Business Profile",
  "WhatsApp automation",
  "Email automation",
  "IndiaMART leads",
  "Business setup",
  "Not sure yet",
];

export function ProjectForm({ contactEmail, bookingUrl }: ProjectFormProps) {
  const id = useId();
  const [status, setStatus] = useState("");
  const recipient = contactEmail?.trim() || siteContact.email;
  const emailLink = "mailto:" + encodeURIComponent(recipient);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const business = String(data.get("business") ?? "").trim();
    const service = String(data.get("service") ?? "Not sure yet");
    const details = String(data.get("details") ?? "").trim();
    const detailsInput = form.elements.namedItem("details") as HTMLTextAreaElement;

    if (!details) {
      detailsInput.setCustomValidity("Tell me a little about what you need.");
      detailsInput.reportValidity();
      return;
    }

    const message = [
      "Hi Apurv, I’d like to discuss a project.",
      "",
      "Name: " + name,
      "Interested in: " + service,
      ...(business ? ["Business / website / profile: " + business] : []),
      "",
      details,
    ].join("\n");

    const submitter = (event.nativeEvent as SubmitEvent).submitter;
    const useEmail =
      submitter instanceof HTMLButtonElement && submitter.value === "email";

    const destination = useEmail
      ? emailLink +
        "?subject=" +
        encodeURIComponent(service + " enquiry from " + name) +
        "&body=" +
        encodeURIComponent(message)
      : whatsappLink(message);

    setStatus(
      useEmail
        ? "Your email app should open with your message. Review it and press Send to contact me."
        : "WhatsApp should open with your message. Review it and tap Send to contact me.",
    );

    try {
      window.location.assign(destination);
    } catch {
      setStatus(
        useEmail
          ? "I couldn’t open your email app. Please try again, or contact me at the email address below."
          : "I couldn’t open WhatsApp. Please try again, or use email instead.",
      );
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.intro}>
        <span className={styles.introIcon} aria-hidden="true">
          <Icon name="message" />
        </span>
        <div>
          <h3>Tell me what you have in mind.</h3>
          <p>Prepare a message, then send it through WhatsApp or your email app. Fields are required unless marked optional.</p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        onChange={() => setStatus("")}
        className={styles.form}
      >
        <div className={styles.field}>
          <label className={styles.label} htmlFor={id + "-service"}>
            What can I help with?
          </label>
          <select
            className={styles.input + " " + styles.select}
            id={id + "-service"}
            name="service"
            defaultValue="Not sure yet"
            required
          >
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.fields}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor={id + "-name"}>
              Your name
            </label>
            <input
              className={styles.input}
              id={id + "-name"}
              name="name"
              autoComplete="name"
              placeholder="Your full name"
              pattern=".*\S.*"
              title="Please enter your name."
              maxLength={100}
              required
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor={id + "-business"}>
              Business, website or profile{" "}
              <span className={styles.optional}>(optional)</span>
            </label>
            <input
              className={styles.input}
              id={id + "-business"}
              name="business"
              autoComplete="organization"
              placeholder="Business name or profile / website link"
              maxLength={250}
            />
          </div>
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor={id + "-details"}>
            What would you like to build or improve?
          </label>
          <textarea
            className={styles.input + " " + styles.textarea}
            id={id + "-details"}
            name="details"
            placeholder="Tell me about your website, Google Business Profile, or a task you’d like to make easier."
            rows={4}
            maxLength={2000}
            required
            onChange={(event) => event.currentTarget.setCustomValidity("")}
          />
        </div>

        <div className={styles.actions}>
          <button
            type="submit"
            name="contactMethod"
            value="whatsapp"
            className={styles.submit}
            aria-describedby={id + "-whatsapp-note"}
          >
            Continue on WhatsApp
            <Icon name="arrow-up-right" />
          </button>
          <p className={styles.note} id={id + "-whatsapp-note"}>
            Opens WhatsApp with your message. Review it and tap Send.
          </p>
          <button
            type="submit"
            name="contactMethod"
            value="email"
            className={styles.emailButton}
          >
            <Icon name="mail" />
            Use email instead
          </button>
        </div>
      </form>

      <p
        className={styles.status}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {status}
      </p>

      <div className={styles.directContact}>
        <p>
          Or email me directly: <a href={emailLink}>{recipient}</a>
        </p>
        {bookingUrl && (
          <p>
            Prefer a call?{" "}
            <a href={bookingUrl}>
              Book a conversation <span aria-hidden="true">↗</span>
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
