import React, { useState } from "react";
import "../components/css_files/ContactMeForm.css";

const ContactMeForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [message, setMessage] = useState("");
  
  const handleSubmit = () => {
  
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setContactNo("");
    setMessage("");
  };

  return (
    <>
      <div className="background">
        <div className="container">
          <div className="screen">
            <div className="screen-header">
              <div className="screen-header-left">
                <div className="screen-header-button close"></div>
                <div className="screen-header-button maximize"></div>
                <div className="screen-header-button minimize"></div>
              </div>
              <div className="screen-header-right">
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
              </div>
            </div>
            <div className="screen-body">
              <div className="screen-body-item left">
                <div className="app-title">
                  <span>CONTACT</span>
                  <span>ME</span>
                </div>
                <div className="app-contact">CONTACT INFO : santimtzv01@gmail.com</div>
              </div>
              <div className="screen-body-item">
                <form className="app-form" onSubmit={handleSubmit} action="">
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="NAME"
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="EMAIL"
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="CONTACT NO"
                      required  
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]+"
                      value={contactNo}
                      onChange={(e) => setContactNo(e.target.value)}
                    />
                  </div>
                  <div className="app-form-group message">
                    <input
                      className="app-form-control"
                      placeholder="MESSAGE"
                      required
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <div className="app-form-group buttons">
                    <button className="app-form-button" onClick={clearForm}>CLEAR</button>
                    <button className="app-form-button" type="submit">SEND</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMeForm;
