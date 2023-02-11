import React from 'react'

export const Pagination = ({ totalItems, itemsPerPage,setCurrentPage,currentPage }) => {

    let pages = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pages.push(i);
    }
    
    return (
        <>
            {pages.map((page, index) => {
                return (

                    <button key={index} className={`btn btn-outline-dark mx-1 ${page===currentPage?'active':''}`} onClick={() => {setCurrentPage(page) }} >{page}</button>
                )
            })}
        </>
    )
}
