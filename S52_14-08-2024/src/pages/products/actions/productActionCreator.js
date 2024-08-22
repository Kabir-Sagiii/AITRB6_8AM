const productsActionCreator = (data) => {
  return {
    type: "PRODUCTS",
    payload: data,
  };
};

export default productsActionCreator;
