import axios from "axios";
import { apiBaseUrl } from "../config/global";

export default function getUsers() {
    return axios.get(`${apiBaseUrl}/users`)
}