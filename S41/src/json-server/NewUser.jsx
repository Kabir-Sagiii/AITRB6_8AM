import { useState } from "react";
import axios from "axios";

function NewUser({ getUsers, isNewUser, newuser, setNewUser, setIsNewUser }) {
  const updateUser = () => {
    axios
      .put(`http://localhost:3000/result/${newuser.id}`, newuser)
      .then((res) => {
        getUsers();
        setNewUser({
          name: "",
          city: "",
        });
        setIsNewUser(true);
      })
      .catch((error) => {
        alert("Went something wrong while updating User");
        console.log(error);
      });
  };

  const addNewUser = () => {
    axios
      .post("http://localhost:3000/result", newuser)
      .then((res) => {
        getUsers();
        setNewUser({
          name: "",
          city: "",
        });
      })
      .catch((error) => {
        alert("NewUser is not created");
        console.log(error);
      });
  };
  return (
    <div style={{ padding: "50px" }} className="shadow p-3 mt-5">
      <h2>{isNewUser ? "New User" : "Update User"}</h2>
      <input
        className="form-control"
        value={newuser.name}
        onChange={(event) => {
          setNewUser({ ...newuser, name: event.target.value });
        }}
        type="text"
        placeholder="username"
      />
      <br />

      <select
        className="form-select"
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
      <button
        className="btn btn-outline-primary"
        onClick={isNewUser ? addNewUser : updateUser}
      >
        {isNewUser ? "New User" : "Update User"}
      </button>
    </div>
  );
}

export default NewUser;
