import axios from "axios";
import { apiBaseUrl } from "../config/global";

export default function getCategories() {
    return axios.get(`${apiBaseUrl}/categories`)
}