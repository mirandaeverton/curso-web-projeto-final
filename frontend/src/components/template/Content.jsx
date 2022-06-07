import { Outlet } from 'react-router-dom'
import styles from './Content.module.css'

export default function Content(props) {
    return (
        <div className={styles.content}>
            {props.children}
        </div>
    )
}