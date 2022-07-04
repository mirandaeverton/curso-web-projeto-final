import { showError, apiBaseUrl } from '../config/global'
import { success } from '../config/msgs'
import axios from "axios";

export default function deleteArticleFromDb(articleId) {
    const id = articleId
    axios.delete(`${apiBaseUrl}/articles/${id}`)
        .then(() => success())
        .catch(showError)
}