/* eslint-disable no-unused-vars */
import React from "react";

const ContactForm = () => {
  return (
    <>
      <h1 className="text-[40px] uppercase mb-4">Message me</h1>
      <form className="form1">
        <div className="flex flex-col md:gap-8 md:flex-row">
          <div className="md:w-1/2 mb-4 relative">
            <input
              id="name"
              className="input-el"
              type="text"
              placeholder="Your fullname"
            />
            <i className="fa-solid fa-circle-exclamation error-icon"></i>
            <small className="hidden"></small>
          </div>
          <div className="md:w-1/2 mb-4 relative">
            <input
              id="email"
              className="input-el"
              type="text"
              placeholder="Your email address"
            />
            <i className="fa-solid fa-circle-exclamation error-icon"></i>
            <small className="hidden"></small>
          </div>
        </div>
        <div className="mb-4 relative">
          <input
            id="sub"
            className="input-el"
            type="text"
            placeholder="Your subject of this message"
          />
          <i className="fa-solid fa-circle-exclamation error-icon"></i>
          <small className="hidden"></small>
        </div>
        <div className="mb-4 relative">
          <textarea
            id="textarea"
            className="input-el h-[auto!important]"
            rows="5"
            placeholder="Write your message"
          ></textarea>
          <i className="fa-solid fa-circle-exclamation error-icon"></i>
          <small className="hidden"></small>
        </div>

        <input
          id="submit1"
          className="submit"
          type="submit"
          value="Send Message"
        />
      </form>
    </>
  );
};

export default ContactForm;
