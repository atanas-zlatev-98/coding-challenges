"use client"
import { useState } from "react";
import { useTasks } from "../context/useTasks"

export function AddTaskForm() {

    const { addTask } = useTasks();

    const [title, setTitle] = useState<string>("");

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault();

        if(title.trim() === "") return;

        const newTask = {
            id: Date.now(),
            title,
            completed: false
        }

        addTask(newTask)
        setTitle("");
    }

    return (
        <form className="flex flex-row gap-2 text-black mb-2" onSubmit={submitHandler}>
            <input className="bg-white text-black rounded p-2 w-full" type="text" placeholder="Task title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button className="bg-green-800 text-white p-2 rounded" type="submit">Add Task</button>
        </form>
    )
}