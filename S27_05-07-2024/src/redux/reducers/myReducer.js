const intialData = {
  name: "",
  city: "",
};

const myReducer = (state = intialData, action) => {
  // state = {name:"Raj Verma",city:"Pune"}
  if (action.type === "NAME") {
    state = {
      ...state,
      name: action.nameComp,
    };
  } else if (action.type === "CITY") {
    state = {
      ...state,
      city: action.cityName,
    };
  }

  return state;
};

export default myReducer;
