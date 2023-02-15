import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const form = useRef();
  const { t } = useTranslation();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_l4xttmd",
      "template_5r55bfk",
      form.current,
      "GWx7QbjsUEjz2X-a2"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>{t("talk")}</h5>
      <h2>{t("contact")}</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>bonfirez@wizardeo.es</h5>
            <a
              href="mailto:bonfirez@wizardeo.es"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("sendmessage")}
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder={t("fullname")} required />
          <input type="email" name="email" placeholder={t("email")} required />
          <textarea
            name="message"
            rows="7"
            placeholder={t("message")}
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            {t("sendmessage")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
