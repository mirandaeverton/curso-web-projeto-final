import styles from '../../styles/UserAdminTable.module.css'
import { useState, useEffect } from "react"
import { Table } from 'react-bootstrap'
import getArticles from '../../api/getArticles'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import deleteArticleFromDb from '../../api/deleteArticleFromDb'

export default function ArticleAdminTable(props) {
    const [articles, setArticles] = useState([])

    async function deleteArticle(e, article) {
        e.preventDefault()
        const id = article.id
        await deleteArticleFromDb(id)
        props.toggleRefreshArticlesTable()
    }

    function renderTableRow(article) {
        return (
            <tr key={article.id}>
                <td>{article.id}</td>
                <td>{article.name}</td>
                <td>{article.description}</td>
                <td className={styles.actions}>
                    <button className={styles.editButton}>
                        {/* <EditIcon onClick={() => props.selectEditableUser(user)}/> */}
                    </button>
                    <button className={styles.deleteButton}>
                        <DeleteForeverIcon onClick={e => deleteArticle(e, article)}/>
                    </button>
                </td>
            </tr>
        )
    }
    
    useEffect(() => {
            async function setArticlesInArray() {
                const response = await getArticles()
                const data = response.data
                const articlesArray = Array.from(data)
                articlesArray.sort((a, b) => a.id - b.id)
                setArticles(articlesArray)
            }
            setArticlesInArray()
    }, [props.refresh])

    return(
        <Table striped>
        <thead>
            <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            {articles.map(article => renderTableRow(article))}
        </tbody>
    </Table>
    )
}