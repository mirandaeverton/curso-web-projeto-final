import { showError, apiBaseUrl } from '../config/global'
import { success } from '../config/msgs'
import axios from "axios";

export default function saveArticleToDb(article) {
    const method = article.id ? 'put' : 'post'
    const id = article.id ? `/${article.id}` : ''
    const articleToSave = { ...article }
    if (!id) delete articleToSave.id
    axios[method](`${apiBaseUrl}/articles${id}`, articleToSave)
        .then(() => success())
        .catch(showError)
}