import { useTasks } from "../../context/useTasks";
import { Task } from "../../types/task";

export default function TasksListItem({task}: {task: Task}) {

    const { toggleTaskCompletion,removeTask } = useTasks();

    return (
        <div className="flex gap-2 items-center">
            <p className={`${task.completed ? "line-through" : ""}`}>{task.title} - {task.completed ? "Done" : "Not Done"}</p>
            <div className="flex gap-2">
                <button className="bg-green-900 rounded p-1 cursor-pointer" onClick={() => toggleTaskCompletion(task.id)}>{task.completed ? "Mark as Incomplete" : "Mark as Complete"}</button>
                <button className="bg-red-900 rounded p-1 cursor-pointer" onClick={() => removeTask(task.id)}>Remove</button>
            </div>
        </div>
    )
}