import axios from "axios";
import { apiBaseUrl } from "../config/global";

export default function getCatgetCategoriesTreeegories() {
    return axios.get(`${apiBaseUrl}/categories/tree`)
}