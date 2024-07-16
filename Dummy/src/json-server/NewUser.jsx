import { useState } from "react";
import axios from "axios";

function NewUser({ getUsers, isNewUser, newuser, setNewUser, setIsNewUser }) {
  const addNewUser = (event) => {
    if (event.target.innerText === "New User") {
      axios
        .post("http://localhost:3000/result", newuser)
        .then((res) => {
          getUsers();
          setNewUser({ name: "", city: "" });
        })
        .catch((error) => {
          alert("NewUser is not created");
          console.log(error);
        });
    } else {
      axios
        .put(`http://localhost:3000/result/${newuser.id}`, newuser)
        .then((res) => {
          getUsers();
          setIsNewUser(true);
          setNewUser({ name: "", city: "" });
        })
        .catch((error) => {
          alert("NewUser is not created");
          console.log(error);
        });
    }
  };
  return (
    <div style={{ padding: "50px" }}>
      <h2>{isNewUser ? "New User" : "Update User"}</h2>
      <input
        value={newuser.name}
        onChange={(event) => {
          setNewUser({ ...newuser, name: event.target.value });
        }}
        type="text"
        placeholder="username"
        style={{ margin: "10px 0px" }}
      />
      <br />

      <select
        value={newuser.city}
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
      <button
        onClick={(event) => {
          addNewUser(event);
        }}
      >
        {isNewUser ? "New User" : "Update User"}
      </button>
    </div>
  );
}

export default NewUser;
