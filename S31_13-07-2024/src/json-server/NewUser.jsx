import { useState } from "react";
import axios from "axios";

function NewUser({ getUsers }) {
  let [newuser, setNewUser] = useState({
    name: "",
    city: "",
  });

  const getNewUser = () => {
    axios
      .post("http://localhost:3000/result", newuser)
      .then((res) => {
        alert("Successfully New User Created");
        getUsers();
      })
      .catch((error) => {
        alert("NewUser is not created");
        console.log(error);
      });
  };
  return (
    <div style={{ padding: "50px" }}>
      <h2>New User</h2>
      <input
        onChange={(event) => {
          setNewUser({ ...newuser, name: event.target.value });
        }}
        type="text"
        placeholder="username"
        style={{ margin: "10px 0px" }}
      />
      <br />

      <select
        onChange={(event) => {
          setNewUser({ ...newuser, city: event.target.value });
        }}
      >
        <option>Select City</option>
        <option>c1</option>
        <option>c2</option>
        <option>c3</option>
        <option>c4</option>
        <option>c5</option>
      </select>
      <br />
      <br />
      <button onClick={getNewUser}>New User</button>
    </div>
  );
}

export default NewUser;
