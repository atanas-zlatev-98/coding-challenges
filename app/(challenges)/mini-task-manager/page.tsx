"use client";

import { TaskProvider } from "./context/TaskProvider";
import TasksList from "./tasks/task-list/TasksList";

export default function MiniTaskManager() {
  return (
    <TaskProvider>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-2xl font-bold mb-4">Mini Task Manager</h1>

        <div>
          <TasksList />
        </div>
        
      </div>
    </TaskProvider>
  );
}
