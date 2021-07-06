import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "../login/Login.css";

export default function Login() {
  const [error, seterror] = useState("");
  const emailref = useRef();
  const passwordref = useRef();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      seterror("");
      setLoading(true);
      await login(emailref.current.value, passwordref.current.value);
      history.push("/home");
    } catch (error) {
      seterror("Failed to Login");
    }
    setLoading(false);
  };
  return (
    <div className="container">
      <div className="login__container">
        {error && <h1>{error}: Something went wrong</h1>}

        <form id="postform" onSubmit={handleSubmit}>
          <input
            type="email"
            className="userEmail"
            placeholder="Enter Email"
            autoComplete="off"
            ref={emailref}
            required
          />
          <input
            type="password"
            className="userPassword"
            placeholder="Enter Password"
            autoComplete="off"
            minLength="8"
            required
            ref={passwordref}
          />
          <div className="login__btnsubmitcontainer">
            <button type="submit">Log In</button>
          </div>
        </form>
      </div>
      <div className="signup">
        <p>Don't have an Account</p> <Link to="/signup">SignUp</Link>
      </div>
    </div>
  );
}
