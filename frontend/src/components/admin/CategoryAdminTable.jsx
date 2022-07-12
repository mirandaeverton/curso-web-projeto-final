import styles from '../../styles/admin/CategoryAdminTable.module.css'
import { useState, useEffect } from "react"
import { Table } from 'react-bootstrap'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import deleteCategoryFromDb from '../../api/deleteCategoryFromDb'

export default function CategoryAdminTable(props) {
    const [categories, setCategories] = useState([])

    async function deleteCategory(e, user) {
        e.preventDefault()
        const id = user.id
        await deleteCategoryFromDb(id)
        props.toggleRefreshCategories(true)
    }

    function renderTableRow(category) {
        return (
            <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>{category.path}</td>
                <td className={styles.actions}>
                    <button className={styles.editButton}>
                        <EditIcon 
                            onClick={() => props.setEditableCategory(category)}
                        />
                    </button>
                    <button className={styles.deleteButton}>
                        <DeleteForeverIcon 
                            onClick={e => deleteCategory(e, category)}
                        />
                    </button>
                </td>
            </tr>
        )
    }
    
    useEffect(() => {
            setCategories(props.categories)
    }, [props.categories])

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