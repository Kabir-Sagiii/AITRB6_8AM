const cartActionCreator = (cartproducts) => {
  return {
    type: "CART",
    payload: cartproducts,
  };
};

export default cartActionCreator;
