import axios from "axios";
import { apiBaseUrl } from "../config/global";

export default function getStatistics() {
    return axios.get(`${apiBaseUrl}/stats`)
}