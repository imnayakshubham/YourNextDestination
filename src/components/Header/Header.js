import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
// import { user } from "../../firebase";
import "../Header/Header.css";

export default function Header() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  // const { loggedinStatus } = useAuth();
  // console.log(loggedinstatus);

  // const username = currentUser.email.substr(0, currentUser.email.indexOf("@"));

  const history = useHistory();
  // if (currentUser) {
  //   const username = currentUser.email.substr(
  //     0,
  //     currentUser.email.indexOf("@")
  //   );
  // } else {
  //   const username = null;
  // }

  function handleLogout() {
    setError("");

    try {
      logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div className="header">
      <div className="header__right">
        <Link className="links" to="/home">
          <strong>Your Next Destination</strong>
        </Link>
      </div>
      <div className="header__left">
        {currentUser ? (
          <Link className="links" to="/login">
            Welcome
          </Link>
        ) : (
          <Link className="links" to="/signup">
            Sign Up
          </Link>
        )}
        {currentUser ? (
          <Link className="links" onClick={handleLogout}>
            Log Out
          </Link>
        ) : (
          <Link className="links" to="/login">
            Log In
          </Link>
        )}
      </div>
    </div>
  );
}
