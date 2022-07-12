import axios from "axios";
import { apiBaseUrl } from "../config/global";

export default function getArticles(categoryId, page) {
    return axios.get(`${apiBaseUrl}/categories/${categoryId}/articles?page=${page}`)
}