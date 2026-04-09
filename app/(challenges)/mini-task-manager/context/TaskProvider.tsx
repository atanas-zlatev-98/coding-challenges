import { createContext, useEffect, useState } from "react";
import { Task, TaskContextType } from "../types/task";

export const TaskContext = createContext<TaskContextType | null>(null);

export const TaskProvider = ({children}:{children:React.ReactNode}) => {

    const [tasks , setTasks] = useState<Task[]>([]);
    const [loading , setLoading] = useState<boolean>(true);
    const [error , setError] = useState<string>('');

    useEffect(()=>{

        const fetchTasks = async () => {
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
                if(!response.ok){
                    throw new Error('Failed to fetch tasks');
                }
                setTasks(await response.json());
            }catch(err){
                if(err instanceof Error){
                    setError(err.message);
                }
            }finally{
                setLoading(false);
            }
        }
        fetchTasks();
    },[]);

    const addTask = (task: Task) => {
        setTasks(prev => [...prev, task]);
    }

    const toggleTaskCompletion = (id: number) => {
        setTasks(prev => prev.map(task => task.id === id ? {...task, completed: !task.completed} : task));
    }

    const removeTask = (id: number) => {
        setTasks(prev => prev.filter(task => task.id !== id));
    }

    const contextValue = {
        tasks,
        loading,
        error,
        addTask,
        toggleTaskCompletion,
        removeTask
    }
    return(
        <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>
    )
}