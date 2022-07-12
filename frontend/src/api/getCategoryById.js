import axios from "axios";
import { apiBaseUrl } from "../config/global";

export default function getCategoryById(id) {
    return axios.get(`${apiBaseUrl}/categories/${id}`)
}