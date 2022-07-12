import getStatistics from '../../api/getStatistics'
import PageTitle from '../template/PageTitle'
import styles from '../../styles/home/Home.module.css'
import Stat from './Stat'
import { useEffect, useState } from 'react'
import FolderIcon from '@mui/icons-material/Folder'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import GroupIcon from '@mui/icons-material/Group'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'


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
            
            <PageTitle mainTitle="Dashboard" caption="Base de Conhecimento">
                <HomeOutlinedIcon sx={{ fontSize: "3rem", mb: "7px", marginRight: "10px" }} />
            </PageTitle>

            <div className={styles.stats}>
                <Stat title="Categorias" value={categories}>
                    <FolderIcon sx={{ fontSize: 80, color: "#d54d50", marginRight: "10px" }} />
                </Stat>
                <Stat title="Artigos" value={articles}>
                    <InsertDriveFileIcon sx={{ fontSize: 80, color: "#3bc480", marginRight: "10px" }} />
                </Stat>
                <Stat title="Usuários" value={users}>
                    <GroupIcon sx={{ fontSize: 80, color: "#3282cd", marginRight: "10px" }} />
                </Stat>
            </div>
        </div>
    )
}