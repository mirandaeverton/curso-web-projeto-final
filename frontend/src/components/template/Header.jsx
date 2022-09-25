import { Link } from 'react-router-dom'
import styles from '../../styles/template/Header.module.css'
import UserDropdown from './UserDropdown'
import ToggleMenu from './ToggleMenu'

export default function Header(props) {
    return (
        <header className={styles.header}>
            {props.user.name ?
                <ToggleMenu setMenuIsVisible={props.setMenuIsVisible} menuIsVisible={props.menuIsVisible} />
                : null
            }

            <Link to="/" className={styles.title}>{props.title}</Link>

            {props.user.name ? <UserDropdown user={props.user} /> : null}
        </header>
    )
}