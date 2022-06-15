import { Link } from 'react-router-dom'
import styles from '../../styles/Header.module.css'
import UserDropdown from './UserDropdown'

export default function Header(props) {
    return(
        <header className={styles.header}>
            <div 
            className={`
                ${styles.toggle}
                ${props.menuIsVisible ? props.menuHidden : null}`} 
                onClick={props.onClick}>
                <i className={`fa fa-lg ${props.toggle}`} />
            </div>
            <Link to="/" className={styles.title}>{ props.title }</Link>
            <UserDropdown 
                user={{name: "Everton Miranda", email: "everton.miranda@instaltech.pt"}}
                showUserDropdownContent={props.showUserDropdownContent}
                onMouseEnter={props.onMouseEnter} 
                onMouseLeave={props.onMouseLeave} 
                />
        </header>
    )
}