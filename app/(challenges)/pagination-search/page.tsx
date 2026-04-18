'use client';
import { useEffect, useState } from "react";
import { usePagination } from "../../(hooks)/use-pagination-hook/usePagination";

type User = {
    id: number;
    name: string;
    email: string;
    company:{
        name: string;
    }
}

export default function PaginationPageSearch() {

    const [users,setUsers] = useState<User[]>([]);
    const [errors,setErrors] = useState('');
    const [loading,setLoading] = useState(true);
    const [searchQuery,setSearchQuery] = useState('');


    const filteredUsers = users.filter((user)=> user.name.toLowerCase().includes(searchQuery.toLowerCase()));

    const {currentPage,totalPages,visibleItems: visibleUsers,nextPage,prevPage,setPage} = usePagination({items: filteredUsers, itemsPerPage: 3});

    const handleSearch = (query: string) =>{
        setSearchQuery(query);
        setPage(1);
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
                    <div>
                        
                        <input type="text" placeholder="Search users..." className="border p-2 rounded w-full mb-4" value={searchQuery} onChange={(e) => handleSearch(e.target.value)}/>
                       {filteredUsers.length === 0 && <p className="text-red-500 text-center">No users found</p>}
                    </div>
                    {visibleUsers.map((user) => (
                        <div key={user.id} className="border p-4 mb-2 rounded">
                            <p className="font-bold">{user.name}</p>
                            <p>{user.email}</p>
                            <p className="text-gray-500">{user.company.name}</p>
                        </div>

                    ))}
                    {filteredUsers.length > 0 && (<div className="flex gap-2 items-center justify-center mt-4">
                        <button disabled={currentPage === 1} className={`bg-blue-700 p-2 rounded hover:bg-blue-500 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`} onClick={prevPage}>Previous Page</button>
                            <div>
                                {Array.from({length: totalPages}, (_, i) => i + 1).map(page => (
                                    <button key={page} className={`mx-1 p-2 rounded cursor-pointer ${currentPage === page ? 'bg-blue-700 text-white' : 'bg-gray-800 hover:bg-gray-500'}`} onClick={() => setPage(page)}>{page}</button>
                                ))}
                            </div>
                        <button disabled={currentPage === totalPages} className={`bg-blue-700 p-2 rounded hover:bg-blue-500 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`} onClick={nextPage}>Next Page</button>
                    </div>)}
                </div>
            )}
        </div>
    )
}