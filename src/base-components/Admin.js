import adminFacade from "../base-facades/adminFacade";
import { useEffect, useState } from "react";
import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Admin() {
  const [allUsers, setAllUsers] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    adminFacade.getUsers().then((users) => setAllUsers([...users]));
  }, [msg]);

  const deleteUser = (e) => {
    adminFacade.deleteUser(e.target.value).then((res) => setMsg(res.userName));
  };

  return (
    <div>
      <h1>Hva så ADMIN! SKER DER G</h1>
      <br />
      <p>{msg !== "" ? `${msg} has been deleted` : ""} </p>
      <br />
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>User</th>
              <th>Roles</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((user) => {
              let roles = user.roles.join(", ");
              return (
                <tr key={user.userName}>
                  <td>{user.userName}</td>
                  <td>{roles}</td>
                  <td>
                    <button onClick={deleteUser} value={user.userName}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
