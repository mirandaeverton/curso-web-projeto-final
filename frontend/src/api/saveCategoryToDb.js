import { showError, apiBaseUrl } from '../config/global'
import { success } from '../config/msgs'
import axios from "axios";

export default function saveCategoryToDb(category) {
    const method = category.id ? 'put' : 'post'
    const id = category.id ? `/${category.id}` : ''
    axios[method](`${apiBaseUrl}/categories${id}`, category)
        .then(() => success())
        .catch(showError)
}