import { useState, useEffect } from "react";
import { SetProfile } from "./DataService";

function Profile() {
  let [state, setState] = useState(null);
  useEffect(() => {
    SetProfile(setState);
  }, []);
  return (
    <div class="card">
      <div class="card-header">
        <img
          src={state != null ? state.avatar_url : ""}
          width="100%"
          height="200"
        />
      </div>
      <div class="card-body">
        <h3 class="text-primary">
          <i class="bi bi-person-add"></i>
          {state != null ? state.name : "No Data"}
        </h3>
        <p>
          {state != null
            ? state.bio
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        </p>
      </div>
      <div class="card-footer">
        <button class="btn btn-outline-primary">Profile Details</button>
      </div>
    </div>
  );
}

export default Profile;
