import styles from '../../styles/admin/UserAdmin.module.css'
import '../../api/getUsers'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import UserAdminForm from './UserAdminForm'
import UserAdminTable from './UserAdminTable'

export default function UserAdmin(props) {

    const [refreshUsersTable, setRefreshUsersTable] = useState(true)
    const [editableUser, setEditableUser] = useState({})

    function selectEditableUser(user) {
        setEditableUser(user)
    }

    function toggleRefreshUsersTable() {
        setRefreshUsersTable(state => !state)
    }

    return (
        <div className={styles.userAdmin}>
            <Toaster position='top-right' />
            <UserAdminForm
                user={editableUser}
                toggleRefreshUsersTable={toggleRefreshUsersTable}
            />
            <UserAdminTable 
                refresh={refreshUsersTable}
                toggleRefreshUsersTable={toggleRefreshUsersTable}
                selectEditableUser={selectEditableUser} 
            />
        </div>
    )
}