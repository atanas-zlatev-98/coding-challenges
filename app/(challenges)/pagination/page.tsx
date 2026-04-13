'use client';
import { useEffect, useState } from "react";

type User = {
    id: number;
    name: string;
    email: string;
    company:{
        name: string;
    }
}

export default function PaginationPage() {

    const [users,setUsers] = useState<User[]>([]);
    const [errors,setErrors] = useState('');
    const [loading,setLoading] = useState(true);
    const [currentPage,setCurrentPage] = useState(1);

    const usersPerPage = 3;
    const totalPages = Math.ceil(users.length / usersPerPage);
    const visibleUsers = users.slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage);

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

    useEffect(()=>{
        const fetchUsers = async () =>{
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if(!response.ok){
                    setErrors('Failed to fetch users');
                    return;
                }
                setUsers(await response.json());
            }catch(err){
                if(err instanceof Error){
                    setErrors(err.message);
                }
            }finally{
                setLoading(false);}
        }
        fetchUsers();
    },[]);

    return (
        <div className="h-screen flex justify-center items-center flex-col">
            <h1 className="text-4xl font-bold">Pagination Challenge</h1>
            {errors && <p className="text-red-500 mt-4">{errors}</p>}
            {loading ? (
                <p className="text-gray-500 mt-4">Loading...</p>
            ) : (
                <div className="mt-4">
                    {visibleUsers.map((user) => (
                        <div key={user.id} className="border p-4 mb-2 rounded">
                            <p className="font-bold">{user.name}</p>
                            <p>{user.email}</p>
                            <p className="text-gray-500">{user.company.name}</p>
                        </div>

                    ))}
                    <div className="flex gap-2 items-center justify-center mt-4">
                        <button disabled={currentPage === 1} className={`bg-blue-700 p-2 rounded hover:bg-blue-500 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`} onClick={prevPage}>Previous Page</button>
                            <p>Page {currentPage} of {totalPages}</p>
                        <button disabled={currentPage === totalPages} className={`bg-blue-700 p-2 rounded hover:bg-blue-500 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`} onClick={nextPage}>Next Page</button>
                    </div>
                </div>
            )}
        </div>
    )
}