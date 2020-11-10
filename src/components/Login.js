import React, { useState } from "react";
import loginFacade from "../facades/loginFacade";

export const Login = ({ isLoggedIn, loginMsg, setLoginStatus }) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    loginFacade
      .login(user)
      .then((res) => setLoginStatus(!isLoggedIn))
      .catch((promise) => {
        printError(promise, setError);
      });
  };

  const handleChange = (e) => {
    setError("");
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const logout = () => {
    setLoginStatus(false);
    loginFacade.logout();
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
};

const printError = (promise, setError) => {
  promise.fullError.then(function (status) {
    setError(`${status.code} : ${status.message}`);
  });
};
