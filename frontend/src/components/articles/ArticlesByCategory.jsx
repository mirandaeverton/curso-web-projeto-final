import styles from '../../styles/articles/ArticlesByCategory.module.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getCategoryById from '../../api/getCategoryById'
import getArticlesByCategory from '../../api/getArticlesByCategory'
import PageTitle from '../template/PageTitle'
import FolderOpenIcon from '@mui/icons-material/FolderOpen'
import ArticleItem from './ArticleItem'

let currentPage = 0

export default function ArticlesByCategory() {
    const [category, setCategory] = useState({})
    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [showLoadMoreButton, setShowLoadMoreButton] = useState(true)
    const { id } = useParams()


    function concatNewArticlesInState(newArticles) {
        if (currentPage == 0) {
            setArticles([])
        }
        if (page != currentPage) {
            setArticles((currentArticles) => [...currentArticles, ...newArticles])
            currentPage = page
        } 
    }

    function renderArticleListItem(article) {
        return(
            <li key={article.id}>
                <ArticleItem article={article} />
            </li>
        )
    }

    async function handleClick(e) {
        e.preventDefault()
        setPage((currentPage) => currentPage + 1)
    }
    
    useEffect(() => {
        getCategoryById(id).then(resp => setCategory({ ...resp.data }))
    },[])
    
    useEffect(() => {
        getArticlesByCategory(id, page).then(resp => {
            console.log(resp.data)
            if(resp.data.length === 0) {
                setShowLoadMoreButton(false)
            }
            concatNewArticlesInState(resp.data)
        })
    }, [page])

    return (
        <div className={styles.articlesByCategory}>
            <PageTitle mainTitle={category.name} caption="Categoria" >
                <FolderOpenIcon sx={{ fontSize: "3rem", mb: "7px", marginRight: "10px" }} />
            </PageTitle>

            <ul className={styles.articlesList}>
                {articles.map(article => renderArticleListItem(article))}
            </ul>
            {showLoadMoreButton ? 
                <button className='btn btn-lg' onClick={handleClick}>Carregar mais artigos</button> 
                : null
            }
        </div>
    )
}