"use client"
import React, { useState } from "react";
import Button from "./Button";

type NewsletterSignupProps = {
  buttonClassName?: string;
  textClassName?: string;
  text?: string;
};

function NewsletterSignup({
  buttonClassName = "",
  textClassName = "",
  text = "Join 700+ founders, builders, and entrepreneurs on our mailing list to stay up to date with our latest events.",
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
    <div className="mx-auto">
      <div className={`my-6 text-xl text-[#2c5e9a] ${textClassName}`}>
        {text}
      </div>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4">
          <input
            id="email"
            type="email"
            name="EMAIL"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        {status === "error" && (
          <div className="mb-4 text-sm text-red-600">{message}</div>
        )}
        {status === "success" && (
          <div className="mb-4 text-sm text-green-600">{message}</div>
        )}
        <Button className={`mt-4 w-full ${buttonClassName}`}>Subscribe</Button>
      </form>
    </div>
  );
}

export default NewsletterSignup;
