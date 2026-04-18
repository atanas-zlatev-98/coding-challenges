'use client'
import Link from "next/link";
import { useState } from "react";

export default function CounterPage() {

    const [count, setCount] = useState(0);

    return(
        <div className="flex justify-center items-center flex-col h-screen">
            <h1 className="text-3xl font-bold mb-4">Counter: {count}</h1>

            <div className="flex flex-row gap-2">
                <button className="bg-green-600 p-2 rounded cursor-pointer" onClick={()=>setCount(count => count + 1)} disabled={count >= 10}>Increment</button>
                <button className="bg-red-600 p-2 rounded cursor-pointer" onClick={()=>setCount(count => count - 1)} disabled={count <= 0}>Decrement</button>
            </div>
            
            <div className="mt-5">
             <Link href="https://github.com/atanas-zlatev-98/coding-challenges/blob/master/app/(challenges)/counter/page.tsx" className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">GitHub Link</Link>
            </div>

        </div>
    )
}