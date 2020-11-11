import React, { useState } from "react";
import apiFacade from "../facades/apiFacade";
import {URL} from "./Home";

export default function Register() {
    const [user, setUser] = useState({ username: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
        setError("");
    };

    const registerUser = e => {
        e.preventDefault();
        if (URL === "") {
            setError("Remember to select an API on the Home page.");
        } else {
        if (user.username !== "" || user.password !== "") {
            apiFacade.register(user).catch(promise => {
                promise.fullError.then((error) => {
                    setError(error.message)
                })
            })
        } else {
            setError("All fields must be filled out.")
        }
    }};

    return (
        <div>
            <form onSubmit={registerUser}>
                <br />
                <label>Username</label><br />
                <input onChange={handleChange} value={user.username} name="username"></input>
                <br />
                <label>Password</label><br />
                <input onChange={handleChange} value={user.password} name="password"></input>
                <br /><br />
                <input type="submit" value="Register"></input>
                <p style={{ color: "red" }}>{error}</p>
            </form>
        </div>
    )
}
