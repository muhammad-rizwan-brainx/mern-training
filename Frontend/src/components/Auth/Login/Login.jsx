import React from "react";
import './Login.css'

function Login() {
  return (
    <div className="login-container">
      <form className="login-form">
        <h3 className="title">Login</h3>
        <div className="email-control">
          <input name="email" type="email" placeholder="Enter Email" />
        </div>
        <div className="password-control">
          <input name="password" type="password" placeholder="Enter Password" />
        </div>
        <div className="submit">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
