import { useState } from "react";

export function usePagination<T>({items, itemsPerPage}: {items: T[], itemsPerPage: number}) {

    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(items.length / itemsPerPage);

    const visibleItems = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const nextPage = () =>{
        if(currentPage < totalPages){
            setCurrentPage(currentPage + 1);
        }
    }

    const prevPage = () =>{
        if(currentPage > 1){
            setCurrentPage(currentPage - 1);
        }
    }

    const setPage = (page: number) => {
        if(page >= 1 && page <= totalPages){
            setCurrentPage(page);
        }
    }
    
    const resetPage = () => {
        setCurrentPage(1);
    }

    return {
        currentPage,
        totalPages,
        visibleItems,
        nextPage,
        prevPage,
        setPage,
        resetPage,
        setCurrentPage
    };
}