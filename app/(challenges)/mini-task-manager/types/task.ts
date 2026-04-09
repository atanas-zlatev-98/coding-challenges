export type Task = {
    id: number;
    title: string;
    completed: boolean;
}

export type TaskContextType = {
    tasks: Task[];
    loading: boolean;
    error: string;
    addTask: (task: Task) => void;
    toggleTaskCompletion: (id: number) => void;
    removeTask: (id: number) => void;
}

