const initialData = {
  isLoggedIn: true,
};
const loginReducer = (state = initialData, action) => {
  switch (action.type) {
    case "LOGOUT":
      state = {
        isLoggedIn: action.payload,
      };
      break;

    case "LOGIN":
      state = {
        isLoggedIn: action.payload,
      };
      break;
  }
  return state;
};
export default loginReducer;
