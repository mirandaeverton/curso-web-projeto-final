import { showError, apiBaseUrl } from '../config/global'
import { success } from '../config/msgs'
import axios from "axios";

export default function deleteUserFromDb(userId) {
    const id = userId
    axios.delete(`${apiBaseUrl}/users/${id}`)
        .then(() => success())
        .catch(showError)
}