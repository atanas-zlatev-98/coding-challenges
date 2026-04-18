'use client';

import Link from "next/link";
import { useLocalStorage } from "./hooks/useLocalStorage";

export default function CustomHookPage() {
    
    const [name, setName] = useLocalStorage<string>("name", "John Doe");

    return (
        <div className="flex items-center justify-center h-screen flex-col gap-4">
            <h1>Custom Hook Challenge</h1>
            <input className="border-2 border-gray-300 p-2 rounded" value={name} onChange={(e) => setName(e.target.value)} />

            {name && <p>Your name is: {name}</p>}

            <div className="mt-5">
              <Link href="https://github.com/atanas-zlatev-98/coding-challenges/tree/master/app/(hooks)/custom-hook" className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">GitHub Link</Link>
            </div>
        </div>
    )
}