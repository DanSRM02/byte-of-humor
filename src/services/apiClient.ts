import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://v2.jokeapi.dev/",
});

export default apiClient;
