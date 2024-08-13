const productsInitialData = {
  data: [],
  cart: [],
};

const productsReducer = (state = productsInitialData, action) => {
  if (action.type === "PRODUCTS") {
    state = {
      ...state,
      data: action.payload,
    };
  } else if (action.type === "CART") {
    state = {
      ...state,
      cart: [...state.cart, action.payload],
    };
  } else if (action.type === "REMOVE-CART") {
    state = {
      ...state,
      cart: state.cart.filter((product) => product.id != action.payload),
    };
  }
  return state;
};

export default productsReducer;
