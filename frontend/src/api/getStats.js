import axios from "axios";
import '../config/global'
import { apiBaseUrl } from "../config/global";

export default async function getStats() {
    const stats = await axios(`${apiBaseUrl}/stats`).then(res => res.data)
    return stats
}