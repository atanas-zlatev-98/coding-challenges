"use client";

import Link from "next/link";
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
          <div className="mt-5">
              <Link href="https://github.com/atanas-zlatev-98/coding-challenges/tree/master/app/(challenges)/mini-task-manager" className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">GitHub Link</Link>
          </div>
        
      </div>

     

    </TaskProvider>
  );
}
