import axios from "axios";

export default axios.create({
  baseURL: "http://homestead.test/api/players",
  // baseURL: "http://homestead.test/api",
  headers: {
    Accept: "application/json",
  },
});
