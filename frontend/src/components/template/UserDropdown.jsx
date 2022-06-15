import styles from '../../styles/UserDropdown.module.css'
import Gravatar from 'react-gravatar'
import { Link } from 'react-router-dom'

export default function UserDropdown(props) {
    return (
        <div 
            className={styles.userDropdown}
            onMouseEnter={props.onMouseEnter} 
            onMouseLeave={props.onMouseLeave}       
        >
            <div className={styles.userButton}>
                <span className='d-none d-sm-block'>{props.user.name}</span>
                <div className={styles.userDropdownImg}>
                    <Gravatar email={props.user.email} alt="User"/>
                </div>
                <i className="fa fa-angle-down"/>

            </div>
            {props.showUserDropdownContent ? 
                <div className={styles.userDropdownContent}>
                    <Link to="/admin"><i className='fa fa-cogs'></i> Administração</Link>
                    <a href=""><i className='fa fa-sign-out'></i> Logout</a>
                </div>
            : null }
        </div>
    )
}