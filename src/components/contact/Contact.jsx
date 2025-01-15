import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const form = useRef();
  const { t } = useTranslation();
  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        "service_f35mlhi",
        "template_5r55bfk",
        form.current,
        "rFxvwVXEStD6p7rkc"
      );
      alert("Message sent successfully!");
      e.target.reset();
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("Failed to send message. Please try again.");
    }
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
            <h5>contacto@robert.soy</h5>
            <a
              href="mailto:contacto@robert.soy"
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
