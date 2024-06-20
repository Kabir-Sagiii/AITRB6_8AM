import { useState } from "react";

function UserNames() {
  let [names, setNames] = useState(["Raj", "Rohan"]);
  return (
    <div style={{ padding: "50px" }}>
      <h2>User Names</h2>
      <ul>
        {names.map(function (name) {
          return <li>{name.name1}</li>;
        })}
      </ul>
    </div>
  );
}

export default UserNames;
