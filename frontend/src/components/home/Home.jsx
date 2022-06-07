import PageTitle from '../template/PageTitle'
import styles from './Home.module.css'
import Stat from './Stat'

export default function Home(props) {
    return(
        <div className={styles.home}>
            <PageTitle 
                icon="fa fa-home"
                mainTitle="Dashboard"
                caption="Base de Conhecimento"
            />
            <div className={styles.stats}>
                <Stat icon="fa fa-folder" style="#d54d50" title="Categorias" value="5"/>
                <Stat icon="fa fa-file" style="#3bc480" title="Artigos" value="3"/>
                <Stat icon="fa fa-user" style="#3282cd" title="Usuários" value="4"/>
            </div>
        </div>
    )
}