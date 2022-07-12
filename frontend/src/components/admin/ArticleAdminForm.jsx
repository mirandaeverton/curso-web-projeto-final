import { useEffect, useState, useRef } from "react"
import styles from '../../styles/admin/ArticleAdminForm.module.css'
import saveArticleToDb from "../../api/saveArticleToDb"
import getUsers from "../../api/getUsers"
import getCategories from "../../api/getCategories"
import getArticleById from "../../api/getArticleById"
import { Editor } from '@tinymce/tinymce-react'
import { init } from "../../config/tinyEditor"

export default function ArticleAdminForm(props) {

    const [users, setUsers] = useState([])
    const [categories, setCategories] = useState([])
    const [article, setArticle] = useState({})
    const [dirty, setDirty] = useState(false)

    const initialArticle = {
        id: null,
        name: "",
        description: "",
        imageUrl: null,
        content: '',
        userId: 'default',
        categoryId: 'default'
    }

    const editorRef = useRef(null)


    function renderSelectOptions(type, value) {
        return (
            type === 'categories' ?
                <option key={value.id} value={value.id}>{value.path}</option> :
                <option key={value.id} value={value.id}>{`${value.name} > ${value.email}`}</option>
        )
    }

    function handleInputChange(e, value) {
        setArticle({
            ...article,
            [value]: e.target.value
        })
    }

    async function saveArticle(e) {
        e.preventDefault()
        const content = editorRef.current.getContent()
        const modifiedArticle = { ...article, content }
        await saveArticleToDb(modifiedArticle)
        resetArticleState(e)
        setDirty(false)
        editorRef.current.setDirty(false)
        editorRef.current.setContent('')
        props.toggleRefresh(true)
    }

    function resetArticleState(e) {
        e.preventDefault()
        setArticle(initialArticle)
    }

    useEffect(() => {
            async function setUsersInArray() {
                const response = await getUsers()
                const data = response.data
                const usersArray = Array.from(data)
                usersArray.sort((a, b) => a.id - b.id)
                setUsers(usersArray)
            }
            async function setCategoriesInArray() {
                const response = await getCategories()
                const data = response.data
                const categoriesArray = Array.from(data)
                categoriesArray.sort((a, b) => a.id - b.id)
                setCategories(categoriesArray)
            }
            setUsersInArray()
            setCategoriesInArray()
            props.toggleRefresh(false)
    }, [])

    useEffect(() => {
        async function setEditableArticle() {
           const articleId = props.editableArticle.id
           if (!articleId) return
           const response = await getArticleById(articleId)
           const data = response.data
           setArticle(data)
        }
        setEditableArticle()
    }, [props.editableArticle])


    return (
        <>
            <form className={styles.articleForm}
                onSubmit={saveArticle}
                onReset={resetArticleState}
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
                        onChange={e => handleInputChange(e, 'name')}
                    />
                </label>

                <label className={`${styles.formInput}`}>
                    Decrição:
                    <input type="text" placeholder="Informe a Descrição do Artigo"
                        value={article.description ? article.description : ''}
                        onChange={e => handleInputChange(e, 'description')}
                    />
                </label>

                <label className={`${styles.formInput}`}>
                    Imagem (URL):
                    <input type="text" placeholder="Informe a URL da imagem"
                        value={article.imageUrl ? article.imageUrl : ''}
                        onChange={e => handleInputChange(e, 'imageUrl')}
                    />
                </label>

                <label className={`${styles.formInput} ${styles.categoryInput}`}>
                    Categoria:
                    <select value={article.categoryId} 
                        onChange={e => handleInputChange(e, 'categoryId')}
                    >
                        <option value={"default"} />
                        {categories.map(category => renderSelectOptions('categories', category))}
                    </select>
                </label>

                <label className={`${styles.formInput} ${styles.authorInput}`}>
                    Autor:
                    <select value={article.userId}
                        onChange={e => handleInputChange(e, 'userId')}
                    >
                        <option value="default" />
                        {users.map(user => renderSelectOptions('users', user))}
                    </select>
                </label>

                <label className={`${styles.formInput} ${styles.authorInput}`}>
                    Conteúdo:
                    <Editor
                        tinymceScriptSrc={'/tinymce/tinymce.min.js'}
                        onInit={(e, editor) => editorRef.current = editor}
                        initialValue={article.content ? article.content : ''}
                        init={init}
                        onDirty={() => setDirty(true)}
                    />
                    {dirty && <p>You have unsaved content!</p>}
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