import styles from "../../styles/template/Menu.module.css"
import { useEffect } from "react"
import { useState } from "react"
import getCategoriesTree from "../../api/getCategoriesTree"
import TreeView from "@mui/lab/TreeView"
import TreeItem from "@mui/lab/TreeItem"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from "react-router-dom"
import "./MenuTree.css"

function renderTree(categories, reloadContentComponent) {
    const lines = []
    categories.forEach(category => {
        if (category.children.length > 0) {
            lines.push(
                <TreeItem
                    key={category.id}
                    nodeId={`${category.id}`}
                    label={
                        <Link
                            to={`/categories/${category.id}/articles`}
                            onClick={() => reloadContentComponent()}
                        >
                            {category.name}
                        </Link>}
                >
                    {renderTree(category.children)}
                </TreeItem>)
        } else {
            lines.push(
                <TreeItem
                    key={category.id}
                    nodeId={`${category.id}`}
                    label={
                        <Link 
                            to={`/categories/${category.id}/articles`}
                            onClick={() => reloadContentComponent()}
                        >
                            {category.name}
                        </Link>}
                />)
        }
    })
    return lines
}

export default function Menu(props) {
    const [categoriesTree, setCategoriesTree] = useState([])

    const reloadContentComponent = () => {
        props.setReloadContent(true)
        console.log(true)
    }

    useEffect(() => {
        getCategoriesTree().then(resp => {
            setCategoriesTree(resp.data)
        })
    }, [])
    return (
        <aside className={styles.menu}>
            <TreeView
                defaultCollapseIcon={<KeyboardArrowDownIcon />}
                defaultExpandIcon={<KeyboardArrowRightIcon />}
            >
                {renderTree(categoriesTree, reloadContentComponent)}
            </TreeView>
        </aside>
    )
}