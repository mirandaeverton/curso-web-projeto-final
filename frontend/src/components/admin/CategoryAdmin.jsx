import styles from '../../styles/CategoryAdmin.module.css'
import { useState, useEffect } from "react"
import { Toaster } from 'react-hot-toast'
import CategoryAdminTable from './CategoryAdminTable'
import CategoryAdminForm from './CategoryAdminForm'
import getCategories from '../../api/getCategories'

export default function CategoryAdmin(props) {
    const [categories, setCategories] = useState([])
    const [editableCategory, setEditableCategory] = useState({})
    const [toggleRefreshCategories, setToggleRefreshCategories] = useState([false])

    useEffect(() => {
        async function setCategoriesInArray() {
            const response = await getCategories()
            const data = response.data
            const categoriesArray = Array.from(data)
            categoriesArray.sort((a, b) => a.id - b.id)
            setCategories(categoriesArray)
        }
        setCategoriesInArray()
    }, [toggleRefreshCategories])

    return (
        <div className={styles.categoryAdmin}>
            <Toaster position='top-right' />
            <CategoryAdminForm 
                categories={categories} 
                toggleRefreshCategories={setToggleRefreshCategories} 
                editableCategory={editableCategory}/>
            <CategoryAdminTable 
                categories={categories} 
                toggleRefreshCategories={setToggleRefreshCategories} 
                setEditableCategory={setEditableCategory}/>
        </div>
    )
}