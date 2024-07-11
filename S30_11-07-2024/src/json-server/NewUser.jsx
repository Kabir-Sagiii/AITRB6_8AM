import React from "react";

function NewUser() {
  return (
    <div style={{ padding: "50px" }}>
      <h2>New User</h2>
      <input
        type="text"
        placeholder="username"
        style={{ margin: "10px 0px" }}
      />
      <br />

      <select>
        <option>Select City</option>
        <option>c1</option>
        <option>c2</option>
        <option>c3</option>
        <option>c4</option>
        <option>c5</option>
      </select>
      <br />
      <br />
      <button>New User</button>
    </div>
  );
}

export default NewUser;
