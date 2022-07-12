import { Link } from 'react-router-dom'
import styles from '../../styles/template/Header.module.css'
import UserDropdown from './UserDropdown'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

export default function Header(props) {
    return(
        <header className={styles.header}>
            <div 
            className={`
                ${styles.toggle}
                ${props.menuIsVisible ? props.menuHidden : null}`} 
                onClick={props.onClick}>
                    {props.toggle ? <KeyboardArrowLeftIcon /> : <KeyboardArrowDownIcon />}
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