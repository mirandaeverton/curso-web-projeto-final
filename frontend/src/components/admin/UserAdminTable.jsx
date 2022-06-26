import styles from '../../styles/UserAdminTable.module.css'
import { useState, useEffect } from "react"
import { Table } from 'react-bootstrap'
import getUsers from '../../api/getUsers'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import deleteUserFromDb from '../../api/deleteUserFromDb'

export default function UserAdminTable(props) {
    const [users, setUsers] = useState([])

    async function deleteUser(e, user) {
        e.preventDefault()
        const id = user.id
        await deleteUserFromDb(id)
        props.toggleRefreshUsersTable()
    }

    function renderTableRow(user) {
        return (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.admin ? 'Sim' : 'Não'}</td>
                <td className={styles.actions}>
                    <button className={styles.editButton}>
                        <EditIcon onClick={() => props.selectEditableUser(user)}/>
                    </button>
                    <button className={styles.deleteButton}>
                        <DeleteForeverIcon onClick={e => deleteUser(e, user)}/>
                    </button>
                </td>
            </tr>
        )
    }
    
    useEffect(() => {
            async function setUsersInArray() {
                const response = await getUsers()
                const data = response.data
                const usersArray = Array.from(data)
                usersArray.sort((a, b) => a.id - b.id)
                setUsers(usersArray)
            }
            setUsersInArray()
    }, [props.refresh])

    return(
        <Table striped>
        <thead>
            <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Admin</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            {users.map(user => renderTableRow(user))}
        </tbody>
    </Table>
    )
}