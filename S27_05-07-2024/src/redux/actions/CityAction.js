export const cityActionCreator = (cityValue) => {
  return {
    type: "CITY",
    cityName: cityValue,
  };
};
