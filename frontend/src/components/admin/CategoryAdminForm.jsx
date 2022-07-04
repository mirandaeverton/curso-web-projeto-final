import { useEffect, useState } from "react";
import styles from '../../styles/CategoryAdminForm.module.css'
import saveCategoryToDb from "../../api/saveCategoryToDb";

export default function CategoryAdminForm(props) {
    const [selectedCategoryOption, setSelectedCategoryOption] = useState("default")
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState({})

    function renderCategorySelectOptions(category) {
        return (
            <option key={category.id} value={category.id}>{category.path}</option>
        )
    }

    const initialCategory = {
        id: '',
        name: '',
        parentId: '',
        path: ''
    }

    function handleCategorySelectInputChange(event) {
        setCategory({
            ...category,
            parentId: event.target.value
        })
        setSelectedCategoryOption(event.target.value)
    }

    function handleCategoryNameInputChange(e) {
        setCategory({
            ...category,
            name: e.target.value
        })
    }

    async function saveCategory(e) {
        e.preventDefault()
        const modifiedCategory = { ...category }
        delete modifiedCategory.path
        resetCategoryState(e)
        await saveCategoryToDb(modifiedCategory)
        props.toggleRefreshCategories(true)
    }

    function resetCategoryState(e) {
        e.preventDefault()
        setCategory(initialCategory)
        setSelectedCategoryOption('default')
    }

    useEffect(() => {
        if(props.categories) setCategories(props.categories)
        
        if(props.editableCategory){
            setCategory(props.editableCategory)
        } else {
            setCategory(initialCategory)
        }
        
        if(props.editableCategory.parentId) setSelectedCategoryOption(props.editableCategory.parentId)

        props.toggleRefreshCategories(false)
    }, [props.categories, props.editableCategory])

    return (
        <>
            <form className={styles.categoryForm}
            onSubmit={saveCategory} 
            onReset={resetCategoryState} 
            >
                {category.id ?
                    <label className={`${styles.formInput} ${styles.idInput}`}>
                        Id:
                        <input readOnly={true} value={category.id} />
                    </label>
                    : ''}
                <label className={`${styles.formInput} ${styles.nameInput}`}>
                    Nome:
                    <input type="text" placeholder="Informe o Nome da Categoria"
                    value={category.name ? category.name : ''} onChange={handleCategoryNameInputChange} 
                    />
                </label>
                <label className={`${styles.formInput} ${styles.nameInput}`}>
                    Categoria Pai:
                    <select value={selectedCategoryOption} onChange={handleCategorySelectInputChange}>
                        <option value="default" />
                        {categories.map(category => renderCategorySelectOptions(category))}
                    </select>
                </label>

                <div className={styles.buttons}>
                    <input type="submit" value="Salvar" className={`${styles.submitButton}`} />
                    <input type="reset" value="Cancelar" className={`${styles.resetButton}`} />
                </div>
            </form>
            <hr />
        </>

    )
}