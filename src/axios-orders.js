import axios from "axios";

const instance = axios.create({
  baseURL: "https://burguer-app-react.firebaseio.com/"
});

export default instance;
