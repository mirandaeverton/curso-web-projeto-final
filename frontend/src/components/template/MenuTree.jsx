import { useEffect } from "react"
import { useState } from "react"
import getCategoriesTree from "../../api/getCategoriesTree"

function renderTree(data) {
    const lines = []
    let line
    data.forEach(node => {
        if (node.children.length > 0) {
            lines.push(
                <li 
                    key={node.id}
                    // expand/collapse function
                
                >
                    
                    {// create react link
                    }
                    {node.name}           
                </li>)
            line = renderTree(node.children)
        } else{
            line = <li key={node.id}>{node.name}</li>
        }
        lines.push(line)
    })
    return (
        <ul>
            {lines}
        </ul>
    )
}

export default function MenuTree(props) {
    const [categoriesTree, setCategoriesTree] = useState([])

    useEffect(() => {
        getCategoriesTree().then(resp => {
            setCategoriesTree(resp.data)
        })
    }, [])
    return (
        <>
            {renderTree(categoriesTree)}
        </>
    )
}