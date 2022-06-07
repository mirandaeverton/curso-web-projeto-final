import PageTitle from '../template/PageTitle'
import styles from './AdminPages.module.css'

export default function AdminPages(props) {
    return(
        <PageTitle 
            icon="fa fa-cogs"
            mainTitle="Administração do Sistema"
            caption="Cadastros & Cia"
        />
    )
}