import getStats from '../../api/getStats'
import PageTitle from '../template/PageTitle'
import styles from './Home.module.css'
import Stat from './Stat'
import { useState } from 'react'

import axios from "axios";
import { apiBaseUrl } from "../../config/global";

export default function Home(props) {

    const [categories, setCategories] = useState(0)
    const [articles, setArticles] = useState(0)
    const [users, setUsers] = useState(0)


    async function getStats() {
        await axios(`${apiBaseUrl}/stats`)
            .then(res => {
                setCategories(res.data.categories)
                setArticles(res.data.articles)
                setUsers(res.data.users)
            })
    }

    getStats()

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