import { useEffect, useState } from 'react'
import { Pagination } from 'react-bootstrap'
import getArticles from '../../api/getArticles'

export default function ArticlePagination(props) {
    const [pages, setPages] = useState()

    function previousPage() {
        if (props.page > 1) {
            const currentPage = props.page
            props.setPage(currentPage - 1)
        }
    }

    function nextPage() {
        if (props.page < pages) {
            const currentPage = props.page
            props.setPage(currentPage + 1)
        }
    }

    function renderPaginationItems(pages) {
        const items = []
        for (let number = 1; number <= pages; number++) {
            items.push(
                <Pagination.Item 
                    key={number} 
                    active={number === props.page}
                    onClick={() => props.setPage(number)}>
                    {number}
                </Pagination.Item>
            )
        }
        return (
            items
        )
    }

    useEffect(() => {
        async function setLimitAndCount() {
            let articlesCount
            let articlesLimit
            await getArticles().then(response => {
                const data = response.data
                articlesCount = data.count
                articlesLimit = data.limit
            })
            setPages(Math.ceil(articlesCount / articlesLimit))
        }
        setLimitAndCount()
    }, [props.page])

    return (
        <Pagination>

            <Pagination.Prev key="-1" onClick={() => previousPage()} />
                {renderPaginationItems(pages)}
            <Pagination.Next key="+1" onClick={() => nextPage()} />
        </Pagination>
    )

}
