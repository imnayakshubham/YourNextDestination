import "./App.css";
import React, { useState } from "react";
import Header from "./Header/Header";
import SignIn from "./SignIn/SignIn";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthProvider, useAuth } from "../context/AuthContext";
import Login from "./login/Login";
import Home from "./Home/Home";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import LandingPage from "./LandingPage/LandingPage";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <div className="app">
        <AuthProvider>
          <Router>
            <Header />
            <Route exact path="/" component={Home}></Route>

            <Route exact path="/signup" component={SignIn}></Route>
            <Route exact path="/login" component={Login}></Route>

            <Switch>
              <PrivateRoute exact path="/home" component={Home} />
            </Switch>
          </Router>
        </AuthProvider>

        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
