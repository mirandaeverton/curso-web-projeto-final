import styles from '../../styles/ArticleAdmin.module.css'
import ArticleAdminForm from './ArticleAdminForm'
import ArticleAdminTable from './ArticleAdminTable'

export default function ArticleAdmin(props) {
    return(
        <div className={styles.articleAdmin}>
            <ArticleAdminForm />
            <ArticleAdminTable />
        </div>
    )
}