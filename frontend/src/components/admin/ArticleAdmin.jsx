import styles from '../../styles/ArticleAdmin.module.css'
import ArticleAdminForm from './ArticleAdminForm'
import ArticleAdminTable from './ArticleAdminTable'
import { Toaster } from 'react-hot-toast'
import { useState } from 'react'
import ArticlePagination from './ArticlePagination'

export default function ArticleAdmin(props) {
    const [refresh, setRefresh] = useState(false)
    const [editableArticle, setEditableArticle] = useState({})
    const [page, setPage] = useState(1)

    return (
        <div className={styles.articleAdmin}>
            <Toaster position='top-right' />
            <ArticleAdminForm
                toggleRefresh={setRefresh}
                editableArticle={editableArticle} />
            <ArticleAdminTable
                refresh={refresh}
                selectEditableArticle={setEditableArticle}
                page={page} />
            <div className={styles.pagination} >
                <ArticlePagination
                    setPage={setPage}
                    page={page}
                />
            </div>
        </div>
    )
}