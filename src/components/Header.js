import "../styles/App.css";
import "../styles/Navbar.css";
import React, { useEffect } from "react";
import {
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { Login } from "./Login";
import Home from "./Home";

let user = "";
let roles = "";

export default function Header({ isLoggedIn, setLoginStatus, loginMsg }) {

  if (isLoggedIn) {
    user = `Logged in as: ${localStorage.getItem("user")}`;
    roles = `Roles: ${localStorage.getItem("roles")}`;
  } else {
    user = "";
    roles = "";
  }

  return (
    <div>
      <ul className="header">
        <li>
          <NavLink exact activeClassName="selected" to="/">
            Home
          </NavLink>
        </li>
        {isLoggedIn && (
          <React.Fragment>
            <li>
              <NavLink activeClassName="active" to="/jokes">
                Jokes
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/scrape">
                Scrape
              </NavLink>
            </li>
          </React.Fragment>
        )}
        <li>
          <NavLink activeClassName="selected" to="/login">
            {loginMsg}
          </NavLink>
        </li>
        <li style={{ float: "right", color: "white", marginRight: "20px" }}>
          {user}<br />{roles}</li>
      </ul>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Login">
          <Login
            setLoginStatus={setLoginStatus}
            isLoggedIn={isLoggedIn}
            loginMsg={loginMsg}
          />
        </Route>
      </Switch>
    </div>
  );
}
