import React, { useState } from "react";
import apiFacade from "../facades/apiFacade";
import { LOCAL_URL, REMOTE_URL } from "../utils/settings";

export let URL = "";

export const Login = ({ isLoggedIn, loginMsg, setLoginStatus }) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  if (URL === "") {
    URL = LOCAL_URL;
  }

  const handleChange = (e) => {
    setError("");
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const changeURL = (e) => {
    URL = e.target.value;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    apiFacade
      .login(user)
      .then((res) => setLoginStatus(!isLoggedIn))
      .catch((promise) => {
        if (promise.fullError) {
          printError(promise, setError);
        } else {
          setError("No response from API. Make sure it is running.");
        }
      });
  };

  const logout = () => {
    setLoginStatus(false);
    apiFacade.logout();
  };

  if (!isLoggedIn) {
    return (
      <div>
        <h2>{loginMsg}</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <input
            id="username"
            placeholder="Enter username"
            onChange={handleChange}
          />
          <br />
          <input
            id="password"
            placeholder="Enter password"
            onChange={handleChange}
          />
          <br />
          <select onChange={changeURL}>
            <option value={LOCAL_URL}>Local API</option>
            <option value={REMOTE_URL}>Remote API</option>
          </select>
          <br />
          <br />
          <input type="submit" value="Log in" />
          <br />
          <p style={{ color: "red" }}>{error}</p>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <h2>{loginMsg}</h2>
        <br />
        <button onClick={logout}>Log out</button>
      </div>
    );
  }
};;

const printError = (promise, setError) => {
  promise.fullError.then(function (status) {
    setError(`${status.message}`);
  });
};