import styles from '../../styles/articles/ArticlebyId.module.css'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import getArticleById from "../../api/getArticleById"
import PageTitle from "../template/PageTitle"
import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';



export default function ArticleById(props) {
    const [article, setArticle] = useState([])
    const { id } = useParams()

    useEffect(() => {
        async function setArticleInState(id) {
            const response = await getArticleById(id)
            setArticle({ ...response.data })
        }
        setArticleInState(id)
    }, [])

    return (
        <div className={styles.content}>
            <PageTitle mainTitle={article.name} caption={article.description} >
                <FileOpenOutlinedIcon sx={{ fontSize: "3rem", mb: "7px", marginRight: "10px" }} />
            </PageTitle>
            <div dangerouslySetInnerHTML={{ __html: article.content }} className={styles.articleContent} />
        </div>
    )
}