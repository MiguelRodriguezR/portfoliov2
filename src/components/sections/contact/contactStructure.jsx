import React, { useContext, useState } from "react";
import EmailContext from "../../../context/emails/emailContext";
import validateEmail from "../../shared/regex";
import "./contact.css";

const ContactStructure = () => {
  const emailContext = useContext(EmailContext);

  const { sending, sendEmail, sent } = emailContext;

  const [errors, saveErrors] = useState({
    noMessage: false,
    noEmail: false,
    incorrectEmail: false,
  });

  const [email, saveEmail] = useState({
    visitorEmail: "",
    message: "",
  });

  const clearErrors = () => {
    saveErrors({
      noMessage: false,
      noEmail: false,
      incorrectEmail: false,
    });
  };

  const onChangeEmail = (e) => {
    saveEmail({
      ...email,
      [e.target.name]: e.target.value,
    });
  };

  const submitProject = (e) => {
    e.preventDefault();
    clearErrors();

    console.log(errors);
    if (email.visitorEmail === "") {
      saveErrors({ noEmail: true });
      return;
    }

    if (!validateEmail(email.visitorEmail)) {
      saveErrors({ incorrectEmail: true });
      return;
    }

    if (email.message === "") {
      saveErrors({ noMessage: true });
      return;
    }

    sendEmail(email);
  };

  return (
    <form className="contact-structure" onSubmit={submitProject}>
      {sending ? (
        <div className="sending-loader">
          <div class="spinner">
            <div class="cube1"></div>
            <div class="cube2"></div>
          </div>
          SENDING EMAIL
        </div>
      ) : null}
      <div className="margin5 c-title yellow">GET IN TOUCH</div>
      <div className="margin10 c-text">
        Want to talk? my inbox is always open. Whether for new projects,
        opportunities or just to say hi,
      </div>
      <div className="margin5 c-title yellow">YOUR EMAIL</div>
      <input
        type="text"
        className="custom-input margin10"
        value={email.visitorEmail}
        name="visitorEmail"
        onChange={onChangeEmail}
      />
      {errors.noEmail ? <p className="error">Email is required</p> : null}
      {errors.incorrectEmail ? (
        <p className="error">Email format is not ok </p>
      ) : null}
      <div className="margin5 c-title yellow">MESSAGE</div>
      <textarea
        className="custom-input margin10"
        cols="30"
        rows="10"
        name="message"
        value={email.message}
        onChange={onChangeEmail}
      ></textarea>
      {errors.noMessage ? <p className="error">Message is required</p> : null}
      <input type="submit" className="custom-button" value="SEND" />
      {sent ? (
        <div className="sent">
          Your email has been sent!{" "}
          <span role="img" aria-label="sad">
            😃🥳
          </span>
        </div>
      ) : null}
    </form>
  );
};

export default ContactStructure;
