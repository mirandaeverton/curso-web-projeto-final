import styles from '../../styles/articles/ArticleItem.module.css'
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import articleImg from '../../assets/article.png'

export default function ArticleItem(props) {
    const [article, setArticle] = useState({})

    useEffect(() => {
        setArticle({ ...props.article })
    }, [])

    return (
        <Link to={`/articles/${article.id}`} className={styles.articleItem}>
            <div className={styles.articleImage}>
                {article.imageUrl ?
                    <img src={article.imageUrl} alt="artigo" height={150} width={150}/> :
                    <img src={articleImg} alt="artigo" height={150} width={150}/>
                }
            </div>
            <div className={styles.articleInfo}>
                <h2>{article.name}</h2>
                <p>{article.description}</p>
                <span>{article.author}</span>
            </div>

        </Link>
    )
}