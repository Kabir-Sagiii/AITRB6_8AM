import { useState } from "react";
import { cityActionCreator } from "../actions/CityAction";
import { useDispatch } from "react-redux";

function City() {
  let [city, setCity] = useState("");
  let dispatch = useDispatch();

  const getCity = () => {
    // var cityAction = cityActionCreator(city);
    // dispatch(cityAction);

    dispatch(cityActionCreator(city));
  };
  return (
    <div style={{ padding: "50px" }}>
      <h2>City Component</h2>
      <br />
      <select
        onChange={(event) => {
          setCity(event.target.value);
        }}
      >
        <option>Select the City</option>
        <option>Hyderabad</option>
        <option>Delhi</option>
        <option>Banglore</option>
        <option>Pune</option>
      </select>
      <button onClick={getCity}>Submit</button>
    </div>
  );
}

export default City;
