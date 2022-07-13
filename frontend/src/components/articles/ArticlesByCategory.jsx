import styles from '../../styles/articles/ArticlesByCategory.module.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getCategoryById from '../../api/getCategoryById'
import getArticlesByCategory from '../../api/getArticlesByCategory'
import PageTitle from '../template/PageTitle'
import FolderOpenIcon from '@mui/icons-material/FolderOpen'
import ArticleItem from './ArticleItem'

export default function ArticlesByCategory() {
    const [category, setCategory] = useState({})
    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const { id } = useParams()

    function concatNewArticlesInState(newArticles) {
        const currentArticles = [...articles]
        setArticles([...currentArticles, ...newArticles])
    }

    function renderArticleListItem(article) {
        return(
            <li key={article.id}>
                <ArticleItem article={article} />
            </li>
        )
    }

    useEffect(() => {
        getCategoryById(id).then(resp => setCategory({ ...resp.data }))
        getArticlesByCategory(id, page).then(resp => {
            const currentPage = page
            setPage(currentPage + 1)
            concatNewArticlesInState(resp.data)
        })
    }, [])

    return (
        <>
            <PageTitle mainTitle={category.name} caption="Categoria" >
                <FolderOpenIcon sx={{ fontSize: "3rem", mb: "7px", marginRight: "10px" }} />
            </PageTitle>

            <ul className={styles.articlesList}>
                {articles.map(article => renderArticleListItem(article))}
            </ul>
        </>
    )
}