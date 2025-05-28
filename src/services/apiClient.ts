import { API_BASE } from "@/utils/const";
import axios from "axios";

const apiClient = axios.create({
  baseURL: API_BASE,
});

export default apiClient;
