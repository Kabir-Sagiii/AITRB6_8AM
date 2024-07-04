const intialData = {
  name: "",
};

const myReducer = (state = intialData, action) => {
  if (action.type === "NAME") {
    state = {
      name: action.nameComp,
    };
  }

  return state;
};

export default myReducer;
