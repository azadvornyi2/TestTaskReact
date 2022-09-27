import React from "react";
import "./LoginForm.css";
import { Redirect } from "react-router-dom";
import AccountsPage from "../Pages/AccountsPage";

function SubmitLogin(event) {
  debugger;
  event.preventDefault();
  <Redirect to="/accounts" />;
}

const LoginForm = () => {
  return (
    <div className="login-block">
      <form onSubmit={SubmitLogin}>
        <div className="mb-3">
          <h1 className="display-5">Login</h1>
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" />
          <label className="form-check-label">Remember me</label>
        </div>
        <div className="d-grid gap-2">
          <input type="submit" className="btn btn-primary" value="Login" />
        </div>
        <div className="mb-3">
          <a href="/recover" className="link-primary">
            Forgot password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
