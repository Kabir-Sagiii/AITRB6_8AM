import { useState } from "react";
import Users from "./Users";
import NewUser from "./NewUser";
import axios from "axios";

function UserHome() {
  let [users, setUsers] = useState([]);
  let [isNewUser, setIsNewUser] = useState(true);
  let [newuser, setNewUser] = useState({
    name: "",
    city: "",
  });
  const getUsers = () => {
    axios
      .get("http://localhost:3000/result")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((error) => {
        alert("something went wrong while accessing users");
        console.log(error);
      });
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <NewUser
          getUsers={getUsers}
          isNewUser={isNewUser}
          setIsNewUser={setIsNewUser}
          setNewUser={setNewUser}
          newuser={newuser}
        />
        <Users
          setNewUser={setNewUser}
          setIsNewUser={setIsNewUser}
          getUsers={getUsers}
          users={users}
        />
      </div>
    </div>
  );
}

export default UserHome;
