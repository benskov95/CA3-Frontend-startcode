import "../styles/App.css";
import "../styles/Navbar.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { Login } from "./Login";
import Home from "./Home";

export default function Header({ isLoggedIn, setLoginStatus, loginMsg }) {
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
