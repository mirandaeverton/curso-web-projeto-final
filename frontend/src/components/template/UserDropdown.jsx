import styles from '../../styles/template/UserDropdown.module.css'
import Gravatar from 'react-gravatar'
import { Link } from 'react-router-dom'
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined'
import LogoutIcon from '@mui/icons-material/Logout'
import { useEffect, useState } from 'react'

export default function UserDropdown(props) {
    const [showUserDropdownContent, setShowUserDropdownContent] = useState(false)

    const handleMouseEnter = () => {
        setShowUserDropdownContent(true)
    }

    const handleMouseLeave = () => {
        setShowUserDropdownContent(false)
    }
    return (
        <div className={styles.userDropdown}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={styles.userButton}>
                <span className='d-none d-sm-block'>{props.user.name}</span>
                <div className={styles.userDropdownImg}>
                    <Gravatar email={props.user.email} alt="User" />
                </div>
                <i className="fa fa-angle-down" />

            </div>
            {showUserDropdownContent ?
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