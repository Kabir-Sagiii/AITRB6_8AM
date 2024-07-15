const intialData = {
  name: "",
  city: "",
  products: [],
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
  } else if (action.type === "PRODUCTS") {
    state = {
      ...state,
      products: action.payload,
    };
  }

  return state;
};

export default myReducer;
