import axios from "axios";

export default axios.create({
  baseURL: "http://homestead.test/api/players",
  headers: {
    Accept: "application/json",
  },
});
