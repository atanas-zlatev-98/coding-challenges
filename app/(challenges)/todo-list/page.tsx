"use client";
import { useRef, useState } from "react";

type ToDoType = {
  id: number;
  todo: string;
};

export default function ToDoListPage() {
    
  const [todos, setTodos] = useState<ToDoType[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const nextId = useRef(1);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos((prev) => [...prev, { id: nextId.current++, todo: newTodo }]);
    setNewTodo("");
  };

  const removeHandler = (todoId: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className="flex justify-center items-center h-screen gap-1">
      <div className="w-[500px] bg-amber-100 text-black justify-center items-center p-2 rounded">
        <h1 className="text-3xl font-bold mb-4 text-center">To-Do List</h1>

        <form onSubmit={submitHandler} className="w-full bg-green-300 rounded mb-4 flex flex-col gap-2 items-center p-2">
          
          <input
            className="w-full p-2"
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo"
          />

          <button
            className={`bg-green-500 text-white p-2 rounded w-40 ${!newTodo ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
            type="submit"
            disabled={!newTodo}>
            Add
          </button>

        </form>

        <div className="list">
          {todos.length === 0 ? ( <p className="text-center text-gray-500">No todos yet!</p>) : (
            <div>
              <h1>To-Do:</h1>
              <ul className="flex flex-col gap-2">
                {todos.map((todos) => (
                  <li key={todos.id} className="flex gap-2 items-center">
                    <button
                      className="bg-red-700 text-white ps-3 pe-3 pt-1 pb-1 rounded cursor-pointer"
                      onClick={() => removeHandler(todos.id)}>
                      X
                    </button>
                    {todos.todo}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
