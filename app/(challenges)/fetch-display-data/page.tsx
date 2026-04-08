'use client';

import { useEffect, useState } from "react"

type UserType = {
    id: number;
    name: string;
    email: string;
}

export default function FetchDisplayDataPage() {

    const [data,setData] = useState<UserType[]>([]);
    const [loading,setLoading] = useState<boolean>(true);
    const [error,setError] = useState<string | null>(null);

    useEffect(()=>{
        const fetchData = async () => {
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/users');

                if(!response.ok){
                    throw new Error(`HTTP status error: ${response.status}`);
                }

                setData(await response.json());
            }catch(err){
                if(err instanceof Error){
                    setError(err.message);
                }
            }
            finally{
                setLoading(false);
            }
        }
        fetchData();
     },[])

    return (
        <div className="flex justify-center items-center h-screen">
            {loading ? <p>Loading...</p> : (
                <div>
                    {error && <p>Error: {error}</p>}
                    <ul className="flex gap-1 flex-col">
                        {data.map((user)=>
                        <li className="p-2 bg-green-700 text-white rounded" key={user.id}>{user.name} - {user.email}</li>)}
                    </ul>
                </div>
            )}
        </div>
    )
}