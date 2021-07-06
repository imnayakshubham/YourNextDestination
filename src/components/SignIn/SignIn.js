import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "../SignIn/SignIn.css";

export default function SignIn() {
  const [error, seterror] = useState("");
  const emailref = useRef();
  const passwordref = useRef();
  const cpasswordref = useRef();
  const { signup } = useAuth();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordref.current.value !== cpasswordref.current.value) {
      return seterror("Passwords do not match");
    }
    try {
      seterror("");
      setLoading(true);
      await signup(emailref.current.value, passwordref.current.value);
      history.push("/login");
    } catch (error) {
      seterror("Failed to create  an account");
    }
    setLoading(false);
  };
  return (
    <div className="container">
      <div className="signin__container">
        {error && <h1>{error}</h1>}

        <form id="postform" onSubmit={handleSubmit}>
          <input
            type="email"
            className="userEmail"
            placeholder="Enter Email"
            ref={emailref}
            required
          />
          <input
            type="password"
            className="userPassword"
            placeholder="Enter Password"
            minLength="8"
            required
            ref={passwordref}
          />
          <input
            type="password"
            className="userPassword"
            placeholder="Confirm Password"
            minLength="8"
            required
            ref={cpasswordref}
          />

          <div className="signin__btnsubmitcontainer">
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
      <div className="login">
        <p>Already have an Account </p>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}
