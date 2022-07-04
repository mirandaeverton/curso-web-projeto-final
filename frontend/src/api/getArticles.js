import axios from "axios";
import { apiBaseUrl } from "../config/global";

export default function getArticles() {
    return axios.get(`${apiBaseUrl}/articles`)
}