"use client"
import React, { useState } from "react";
import Button from "./Button";

type NewsletterSignupProps = {
  buttonClassName?: string;
  textClassName?: string;
  text?: string;
  inputClassName?: string;
};

function  NewsletterSignup({
  buttonClassName = "",
  textClassName = "",
  text = "Join 700+ founders, builders, and entrepreneurs on our mailing list to stay up to date with our latest events.",
  inputClassName = "",
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); // "loading", "success", or "error"
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate an API call to subscribe the user.
    try {
      // Replace the timeout with your actual API call.
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setMessage("Thank you for subscribing!");
      setEmail(""); // clear the input field
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="form-control">
      <form
        action="https://vteclub.us8.list-manage.com/subscribe/post?u=5fa06e1fdfbb4ff1646ba3d2f&amp;id=1dea666573&amp;f_id=00c00fe0f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate form-control mt-6"
        target="_blank"
      >
        <div id="mc_embed_signup_scroll">
          <div className="mc-field-group">
            <label htmlFor="mce-EMAIL">
              {/* Email Address <span className="asterisk">*</span> */}
            </label>
            <input
              type="email"
              name="EMAIL"
              className="required email input input-primary mt-4 w-full px-3 py-2"
              id="mce-EMAIL"
              required
              placeholder="Email"
            />
            <span
              id="mce-EMAIL-HELPERTEXT"
              className="mt-1 block text-sm"
            ></span>
          </div>
          <div id="mce-responses" className="clear">
            <div className="response" id="mce-error-response"></div>
            <div className="response" id="mce-success-response"></div>
          </div>
          <div
            aria-hidden="true"
            style={{ position: "absolute", left: "-5000px" }}
          >
            <input
              type="text"
              name="b_5fa06e1fdfbb4ff1646ba3d2f_1dea666573"
              tabIndex={-1}
            />
          </div>
          <input
            type="submit"
            name="subscribe"
            id="mc-embedded-subscribe"
            className="mt-4 bg-white w-full px-3 py-2 ApexMk2"
            defaultValue="Subscribe"
          />
        </div>
      </form>
    </div>
  );
}

export default NewsletterSignup;
