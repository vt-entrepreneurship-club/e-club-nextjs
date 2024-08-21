import React from "react";

function NewsletterSignup() {
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
              Email Address <span className="asterisk">*</span>
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
              value=""
            />
          </div>
          <input
            type="submit"
            name="subscribe"
            id="mc-embedded-subscribe"
            className="btn btn-primary btn-block mt-4"
            value="Subscribe"
          />
        </div>
      </form>
    </div>
  );
}

export default NewsletterSignup;
