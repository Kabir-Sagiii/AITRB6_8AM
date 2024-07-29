const counterReducer = (state, action) => {
  //state = {count:10} 10-1 9
  if (action.type === "INC") {
    state = {
      count: state.count + 1,
    };
  } else {
    state = {
      count: state.count - 1,
    };
  }

  return state;
};

export default counterReducer;
