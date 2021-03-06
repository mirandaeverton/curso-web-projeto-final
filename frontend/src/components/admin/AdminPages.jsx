import PageTitle from '../template/PageTitle'
import styles from '../../styles/admin/AdminPages.module.css'
import { Card, Tabs, Tab } from 'react-bootstrap'
import ArticleAdmin from './ArticleAdmin'
import CategoryAdmin from './CategoryAdmin'
import UserAdmin from './UserAdmin'
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined'

export default function AdminPages(props) {
    return (
        <>
            <PageTitle mainTitle="Administração do Sistema" caption="Cadastros & Cia">
                <EngineeringOutlinedIcon sx={{ fontSize: "3rem", mb: "7px", marginRight: "10px" }} />
            </PageTitle>
            <div className={styles.adminPageTabs}>
                <Card>
                    <Tabs defaultActiveKey="articles">
                        <Tab eventKey="articles" title="Artigos">
                            <ArticleAdmin/>
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