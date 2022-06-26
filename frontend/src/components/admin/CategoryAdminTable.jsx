import styles from '../../styles/CategoryAdminTable.module.css'
import { useState, useEffect } from "react"
import { Table } from 'react-bootstrap'
import getCategories from '../../api/getCategories'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import deleteUserFromDb from '../../api/deleteUserFromDb'

export default function CategoryAdminTable(props) {
    const [categories, setCategories] = useState([])

    // async function deleteUser(e, user) {
    //     e.preventDefault()
    //     const id = user.id
    //     await deleteUserFromDb(id)
    //     props.toggleRefreshUsersTable()
    // }

    function renderTableRow(category) {
        return (
            <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>{category.path}</td>
                <td className={styles.actions}>
                    <button className={styles.editButton}>
                        <EditIcon 
                            // onClick={() => props.selectEditableUser(user)}
                        />
                    </button>
                    <button className={styles.deleteButton}>
                        <DeleteForeverIcon 
                            // onClick={e => deleteUser(e, user)}
                        />
                    </button>
                </td>
            </tr>
        )
    }
    
    useEffect(() => {
            async function setCategoriesInArray() {
                const response = await getCategories()
                const data = response.data
                const categoriesArray = Array.from(data)
                categoriesArray.sort((a, b) => a.id - b.id)
                setCategories(categoriesArray)
            }
            setCategoriesInArray()
    }, [props.refresh])

    return(
        <Table striped>
        <thead>
            <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Caminho</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            {categories.map(category => renderTableRow(category))}
        </tbody>
    </Table>
    )
}