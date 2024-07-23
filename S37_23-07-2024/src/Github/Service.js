import axios from "axios";

export const getUserDetails = (username) => {
  return axios.get(`https://api.github.com/users/${username}`);
};
