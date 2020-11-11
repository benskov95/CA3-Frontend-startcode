import adminFacade from "../facades/adminFacade";
import { useEffect, useState } from "react";
import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Admin() {
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
      adminFacade.getUsers().then((users) => setAllUsers([...users]));
    }, []);
    

  return (
    <div>
      <h1>Hva så ADMIN! SKER DER G</h1>
      <br />
      <br />
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>User</th>
              <th>Roles</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((user) => {
              let roles = user.roles.join(", ");
              return (
                <tr key={user.userName}>
                  <td>{user.userName}</td>
                  <td>{roles}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
