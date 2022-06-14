import getStatistics from '../../api/getStatistics'
import PageTitle from '../template/PageTitle'
import styles from '../../styles/Home.module.css'
import Stat from './Stat'
import { useEffect, useState } from 'react'


export default function Home(props) {

    const [categories, setCategories] = useState(0)
    const [articles, setArticles] = useState(0)
    const [users, setUsers] = useState(0)

    useEffect(() => {
        async function setStatisticsInComponents() {
            const response = await getStatistics()
            const data = response.data
            setCategories(data.categories)
            setArticles(data.articles)
            setUsers(data.users)
        }

        setStatisticsInComponents()
    })

    return (
        <div className={styles.home}>
            <PageTitle
                icon="fa fa-home"
                mainTitle="Dashboard"
                caption="Base de Conhecimento"
            />
            <div className={styles.stats}>
                <Stat icon="fa fa-folder" style="#d54d50" title="Categorias" value={categories} />
                <Stat icon="fa fa-file" style="#3bc480" title="Artigos" value={articles} />
                <Stat icon="fa fa-user" style="#3282cd" title="Usuários" value={users} />
            </div>
        </div>
    )
}