import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-backend-om.herokuapp.com/",
});

export default instance;
