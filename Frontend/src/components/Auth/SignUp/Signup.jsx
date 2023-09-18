import React from "react";
import './Signup.css'

function Signup() {
  return (
    <div className="signup-container">
      <form className="signup-form">
        <h3 className="title">Signup</h3>
        <div className="name-control">
          <input name="name" type="text" placeholder="Enter Name" />
        </div>
        <div className="email-control">
          <input name="email" type="email" placeholder="Enter Email" />
        </div>
        <div className="password-control">
          <input name="password" type="password" placeholder="Enter Password" />
        </div>
        <div className="confirmPassword-control">
          <input
            name="confirmPassword"
            type="password"
            placeholder="Enter confirmPassword"
          />
        </div>
        <div className="submit">
          <button type="submit">Signup</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
