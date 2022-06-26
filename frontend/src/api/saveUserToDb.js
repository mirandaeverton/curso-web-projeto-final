import { showError, apiBaseUrl } from '../config/global'
import { success } from '../config/msgs'
import axios from "axios";

export default function saveUserToDb(user) {
    const method = user.id ? 'put' : 'post'
    const id = user.id ? `/${user.id}` : ''
    axios[method](`${apiBaseUrl}/users${id}`, user)
        .then(() => success())
        .catch(showError)
}