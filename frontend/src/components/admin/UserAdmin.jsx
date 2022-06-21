import styles from '../../styles/UserAdmin.module.css'
import '../../api/getUsers'
import {showError} from '../../config/global'
import { Table } from 'react-bootstrap'
import getUsers from '../../api/getUsers'
import { useState } from 'react'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'

function renderTableRow(props) {
    return (
        <tr key={props.id}>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.admin ? 'Sim' : 'Não'}</td>
        </tr>
    )
}

export default function UserAdmin(props) {
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        async function setUsersInArray() {
            const response = await getUsers()
            const data = response.data
            const usersArray = Array.from(data)
            setUsers(usersArray)
        }
        setUsersInArray()
        
    }, [users])

    return (
        <>
        <Toaster position='top-right'/>
        <Table>
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
        </>
    )
}