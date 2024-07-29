import React from "react";
import Search from "./Search";
import Profile from "./Profile";
import Details from "./Details";

function Home() {
  return (
    <div className="container shadow mt-3 p-3 w-75 mx-auto">
      <div className="row">
        <Search />
      </div>
      <div className="row">
        <div className="col-4">
          <Profile />
        </div>
        <div className="col-8">
          <Details />
        </div>
      </div>
    </div>
  );
}

export default Home;
