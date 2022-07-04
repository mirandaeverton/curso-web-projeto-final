import { showError, apiBaseUrl } from '../config/global'
import { success } from '../config/msgs'
import axios from "axios";

export default function saveArticleToDb(article) {
    const method = article.id ? 'put' : 'post'
    const id = article.id ? `/${article.id}` : ''
    axios[method](`${apiBaseUrl}/articles${id}`, article)
        .then(() => success())
        .catch(showError)
}