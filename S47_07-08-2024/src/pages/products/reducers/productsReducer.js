const productsInitialData = {
  data: [],
};

const productsReducer = (state = productsInitialData, action) => {
  if (action.type === "PRODUCTS") {
    state = {
      data: action.payload,
    };
  }
  return state;
};

export default productsReducer;
