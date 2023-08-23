import React, { useState } from 'react';
import '../styles/login.css'; // Import the CSS file

const PopupForm = () => {
  const [formVisible, setFormVisible] = useState(false);

  const openForm = () => {
    setFormVisible(true);
  };

  const closeForm = () => {
    setFormVisible(false);
  };

  return (
    <div>
      <h2>Popup Form</h2>
      <p>Click on the button at the bottom of this page to open the login form.</p>
      <p>Note that the button and the form are fixed - they will always be positioned at the bottom of the browser window.</p>

      <button className="open-button" onClick={openForm}>Open Form</button>

      {formVisible ? (
        <div className="form-popup" id="myForm">
          <div className="form-container">
            <h1>Login</h1>

            <label htmlFor="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required />

            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required />

            <button type="submit" className="btn">Login</button>
            <button type="button" className="btn cancel" onClick={closeForm}>Close</button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PopupForm;
