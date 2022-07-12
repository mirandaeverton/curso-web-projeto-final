import styles from '../../styles/template/UserDropdown.module.css'
import Gravatar from 'react-gravatar'
import { Link } from 'react-router-dom'
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined'
import LogoutIcon from '@mui/icons-material/Logout'

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
                    <Gravatar email={props.user.email} alt="User" />
                </div>
                <i className="fa fa-angle-down" />

            </div>
            {props.showUserDropdownContent ?
                <div className={styles.userDropdownContent}>
                    <Link to="/admin">
                        <EngineeringOutlinedIcon /> Administração
                    </Link>
                    <a href="">
                       <LogoutIcon /> Logout
                    </a>
                </div>
                : null}
        </div>
    )
}