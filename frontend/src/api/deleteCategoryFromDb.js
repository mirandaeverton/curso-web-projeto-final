import { showError, apiBaseUrl } from '../config/global'
import { success } from '../config/msgs'
import axios from "axios";

export default function deleteCategoryFromDb(categoryId) {
    const id = categoryId
    axios.delete(`${apiBaseUrl}/categories/${id}`)
        .then(() => success())
        .catch(showError)
}