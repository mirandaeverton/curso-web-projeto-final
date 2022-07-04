import { useEffect, useState } from "react";
import styles from '../../styles/ArticleAdminForm.module.css'
import saveArticleToDb from "../../api/saveArticleToDb";

export default function ArticleAdminForm(props) {
    const [selectedCategoryOption, setSelectedCategoryOption] = useState("default")
    const [articles, setArticles] = useState([])
    const [article, setArticle] = useState({})

    // function renderCategorySelectOptions(category) {
    //     return (
    //         <option key={category.id} value={category.id}>{category.path}</option>
    //     )
    // }

    const initialCategory = {
        id: '',
        name: '',
        parentId: '',
        path: ''
    }

    // function handleCategorySelectInputChange(event) {
    //     setCategory({
    //         ...category,
    //         parentId: event.target.value
    //     })
    //     setSelectedCategoryOption(event.target.value)
    // }

    // function handleCategoryNameInputChange(e) {
    //     setCategory({
    //         ...category,
    //         name: e.target.value
    //     })
    // }

    // async function saveCategory(e) {
    //     e.preventDefault()
    //     const modifiedCategory = { ...category }
    //     delete modifiedCategory.path
    //     resetCategoryState(e)
    //     await saveArticleToDb(modifiedCategory)
    //     props.toggleRefreshCategories(true)
    // }

    // function resetCategoryState(e) {
    //     e.preventDefault()
    //     setCategory(initialCategory)
    //     setSelectedCategoryOption('default')
    // }

    // useEffect(() => {
    //     if(props.categories) setCategories(props.categories)
        
    //     if(props.editableCategory){
    //         setCategory(props.editableCategory)
    //     } else {
    //         setCategory(initialCategory)
    //     }
        
    //     if(props.editableCategory.parentId) setSelectedCategoryOption(props.editableCategory.parentId)

    //     props.toggleRefreshCategories(false)
    // }, [props.categories, props.editableCategory])

    return (
        <>
            <form className={styles.articleForm}
            // onSubmit={saveCategory} 
            // onReset={resetCategoryState} 
            >
                {article.id ?
                    <label className={`${styles.formInput} ${styles.idInput}`}>
                        Id:
                        <input readOnly={true} value={article.id} />
                    </label>
                    : ''}

                <label className={`${styles.formInput}`}>
                    Nome:
                    <input type="text" placeholder="Informe o Nome do Artigo"
                    value={article.name ? article.name : ''} 
                    // onChange={handleCategoryNameInputChange} 
                    />
                </label>

                <label className={`${styles.formInput}`}>
                    Decrição:
                    <input type="text" placeholder="Informe a Descrição do Artigo"
                    value={article.description ? article.description : ''} 
                    // onChange={handleCategoryNameInputChange} 
                    />
                </label>

                <label className={`${styles.formInput}`}>
                    Imagem (URL):
                    <input type="text" placeholder="Informe a URL da imagem"
                    value={article.imageUrl ? article.imageUrl : ''} 
                    // onChange={handleCategoryNameInputChange} 
                    />
                </label>

                <label className={`${styles.formInput} ${styles.nameInput}`}>
                    Categoria:
                    <select value={selectedCategoryOption} 
                    // onChange={handleCategorySelectInputChange}
                    >
                        <option value="default" />
                        {/* {categories.map(category => renderCategorySelectOptions(category))} */}
                    </select>
                </label>

                <label className={`${styles.formInput} ${styles.nameInput}`}>
                    Autor:
                    <select value={selectedCategoryOption} 
                    // onChange={handleCategorySelectInputChange}
                    >
                        <option value="default" />
                        {/* {categories.map(category => renderCategorySelectOptions(category))} */}
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