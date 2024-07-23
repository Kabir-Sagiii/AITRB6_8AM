import React from "react";

function Profile() {
  return (
    <div class="card">
      <div class="card-header">
        <img
          src="https://i0.wp.com/www.torontophotographerz.com/wp-content/uploads/2017/06/Business-portrait-23.jpg?fit=800%2C1200&ssl=1"
          width="100%"
          height="200"
        />
      </div>
      <div class="card-body">
        <h3 class="text-primary">
          <i class="bi bi-person-add"></i>Raj Verma
        </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div class="card-footer">
        <button class="btn btn-outline-primary">Profile Details</button>
      </div>
    </div>
  );
}

export default Profile;
