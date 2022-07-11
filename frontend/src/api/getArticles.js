import axios from "axios";
import { apiBaseUrl } from "../config/global";

export default function getArticles(page) {
    return axios.get(`${apiBaseUrl}/articles?page=${page}`)
}