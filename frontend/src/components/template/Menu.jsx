import styles from '../../styles/template/Menu.module.css'
import MenuTree from './MenuTree'

export default function Menu(props) {
    return(
        <aside className={styles.menu}>
            <MenuTree/>
        </aside>
    )
}