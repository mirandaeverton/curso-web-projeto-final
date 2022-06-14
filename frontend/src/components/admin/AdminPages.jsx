import PageTitle from '../template/PageTitle'
import styles from '../../styles/AdminPages.module.css'
import { Card, Tabs, Tab } from 'react-bootstrap'
import ArticleAdmin from './ArticleAdmin'
import CategoryAdmin from './CategoryAdmin'
import UserAdmin from './UserAdmin'

export default function AdminPages(props) {
    return (
        <>
            <PageTitle
                icon="fa fa-cogs"
                mainTitle="Administração do Sistema"
                caption="Cadastros & Cia"
            />
            <div className={styles.adminPageTabs}>
                <Card>
                    <Tabs defaultActiveKey="articles">
                        <Tab eventKey="articles" title="Artigos">
                            <ArticleAdmin />
                        </Tab>
                        <Tab eventKey="categories" title="Categorias">
                            <CategoryAdmin />
                        </Tab>
                        <Tab eventKey="users" title="Usuários">
                            <UserAdmin />
                        </Tab>
                    </Tabs>
                </Card>
            </div>
        </>
    )
}