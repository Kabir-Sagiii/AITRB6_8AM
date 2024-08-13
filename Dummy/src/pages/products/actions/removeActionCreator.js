export let removeActionCreator = (data) => {
  return {
    type: "REMOVE-CART",
    payload: data,
  };
};
