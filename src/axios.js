import axios from "axios";

export default axios.create({
  baseURL: "http://homestead.test/api/players",
  // baseURL: "ec2-18-130-55-71.eu-west-2.compute.amazonaws.com/api/players",
  Headers: {"Accept": "application/json"}
});
