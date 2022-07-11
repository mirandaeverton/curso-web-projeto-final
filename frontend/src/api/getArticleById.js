import axios from "axios";
import { apiBaseUrl } from "../config/global";

export default function getArticleById(id) {
    return axios.get(`${apiBaseUrl}/articles/${id}`)
}