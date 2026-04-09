Challenge: Mini Task Manager App
Build a small task manager in React with the following requirements:
1. Context

Create a TaskContext using the Context API to hold your task list and share it across components.

2. Components to build

TaskProvider — wraps the app, holds state, provides context
TaskForm — a controlled form with a text input to add new tasks
TaskList — renders the list of tasks
TaskItem — a single task row with a "Done" toggle and a "Delete" button

3. State & behaviour

Tasks have an id, text, and done (boolean) field
Adding a task appends it to the list
Toggling "Done" flips the done field and visually marks the task (e.g. strikethrough)
Deleting removes the task from the list

4. Fetch

On first load (useEffect), fetch tasks from this public API and seed your list with the first 5:

  https://jsonplaceholder.typicode.com/todos
Map the response to your { id, text, done } shape (the API returns id, title, completed).

Deliverable: a single .jsx file that I can drop into a Vite + React project and it works.
Take a shot at it and paste your code here when you're ready — I'll review it, point out any issues, and suggest improvements. If you get stuck on any part just say so!