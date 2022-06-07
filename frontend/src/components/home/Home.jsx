import PageTitle from '../template/PageTitle'
import styles from './Home.module.css'

export default function Home(props) {
    return(
        <PageTitle 
            icon="fa fa-home"
            mainTitle="Dashboard"
            caption="Base de Conhecimento"
        />
    )
}