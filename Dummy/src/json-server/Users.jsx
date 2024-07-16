import { useEffect } from "react";
import axios from "axios";
function Users({ getUsers, users, setIsNewUser, setNewUser }) {
  useEffect(() => {
    getUsers();
  }, []);

  const updateUser = (userdata) => {
    setIsNewUser(false);
    setNewUser({
      ...userdata,
    });
  };

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:3000/result/${id}`)
      .then((res) => {
        alert("User Deleted Successfully");
        getUsers();
      })
      .catch((error) => {
        alert("Failed to remove user");
        console.log(error);
      });
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "30px" }}>
        Users Information
      </h2>
      {users.length > 0 && (
        <div style={{ margin: "30px auto", width: "500px" }}>
          <table frame="box" rules="all" cellPadding="10" width={"100%"}>
            <thead>
              <tr>
                <th>Name</th>
                <th>City</th>
                <th colSpan={2}>Action</th>
              </tr>
            </thead>
            <tbody align="center">
              {users.map((element) => {
                return (
                  <tr>
                    <td>{element.name}</td>
                    <td>{element.city}</td>
                    <td>
                      <button
                        onClick={() => {
                          updateUser(element);
                        }}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          deleteUser(element.id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Users;
