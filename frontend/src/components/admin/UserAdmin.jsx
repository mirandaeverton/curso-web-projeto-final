import styles from '../../styles/UserAdmin.module.css'
import '../../api/getUsers'
import { Table } from 'react-bootstrap'
import getUsers from '../../api/getUsers'
import React from 'react'



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

async function setUsersInArray() {
    const response = await getUsers()
    const data = response.data
    const usersArray = Array.from(data)
    this.setState(() => {
        const users = [ ...usersArray ]
        return {
            users
        }
    })
}

export default class UserAdmin extends React.Component {

    constructor(props) {
        super(props)
        this.state = {users: []}
        this.setUsersInArray = setUsersInArray.bind(this)
    }

    componentDidMount() {
        this.setUsersInArray()
    }
    render() {
        return (
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
                {this.state.users.map(user => renderTableRow(user))}
            </tbody>
        </Table>
    )}
}