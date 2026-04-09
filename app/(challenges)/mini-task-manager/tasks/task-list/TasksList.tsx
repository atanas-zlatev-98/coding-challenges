import { useTasks } from "../../context/useTasks"
import { AddTaskForm } from "../../form/AddTaskForm";
import TasksListItem from "../task-list-item/TaskListItem";

export default function TasksList() {

    const {tasks, loading} = useTasks();    
  
    return (
        <div>
            {loading ? (<p>Loading tasks...</p>) : (
                <>
                    <AddTaskForm/>
                    <div className="flex flex-col gap-2">{tasks?.map(task => (<TasksListItem key={task.id} task={task} />))}</div>
                </>
            )}
        </div>
    )
}