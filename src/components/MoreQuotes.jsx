import React, { useState } from "react";
import "../components/css_files/MoreQuotes.css";

const MoreQuotes = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    
  };

  return (
    <>
      <div class="more-quote-container">
        <h3 class="more-quote">Want to view more quotes?</h3>
        <span class="more-quote-text">Subscribe to my weekly quotes and receive a new inspirational quote every two days</span>
        <form onSubmit={handleSubmit} action="">
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="subscribe" type="submit">Subscribe</button>
        </form>
      </div>
    </>
  );
}

export default MoreQuotes;
