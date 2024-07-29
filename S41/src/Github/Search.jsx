import { useState } from "react";
import { getUserDetails } from "./Service";
import { ProfileSet } from "./DataService";

function Search() {
  let [username, setUserName] = useState("");

  const getUser = () => {
    getUserDetails(username)
      .then((res) => {
        console.log(res.data);
        ProfileSet(res.data);
        // addData(res.data);
        //setState() of Profile Component
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div class="row my-2">
        <h2 class="text-primary">Github Search Application</h2>
      </div>

      <div class="row my-2">
        <div class="col-8">
          <input
            class="form-control"
            type="text"
            placeholder="Enter Username"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div class="col-4">
          <button class="btn btn-outline-primary px-5" onClick={getUser}>
            Search <i class="bi bi-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
