'use client';

import Link from "next/link";
import { useState } from "react";

const initialState = [
  { id: 1, title: "What is React?", content: "A JS library for building UIs." },
  { id: 2, title: "What is a hook?", content: "Functions that let you use React features." },
  { id: 3, title: "What is JSX?", content: "A syntax extension that looks like HTML." },
];

export default function AccordionPage() {

    const [items, setItems] = useState(initialState);
    const [activeId, setActiveId] = useState<number | null>(null);

    return (
        <div className="flex items-center justify-center h-screen flex-col gap-4">
            <h1>Accordion Challenge</h1>

            <div className="flex gap-2 flex-col">
                {items.map((item) => (
                    <div className="bg-green-800 w-125 h-fit p-3 flex flex-col" onClick={()=>setActiveId(activeId === item.id ? null : item.id)} key={item.id}>
                        <h2>{item.title}</h2>
                        <div className={`${activeId === item.id ? "block" : "hidden"} flex`}>{item.content}</div>
                    </div>
                ))}
            </div>

            <div className="mt-5">
                <Link href="https://github.com/atanas-zlatev-98/coding-challenges/blob/master/app/(challenges)/accordion/page.tsx" className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">GitHub Link</Link>
            </div>

        </div>
    )
}