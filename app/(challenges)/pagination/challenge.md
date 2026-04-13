Task: Paginated user list
Build a React component that fetches users from https://jsonplaceholder.typicode.com/users and displays them 3 per page with pagination controls.
Requirements:

Fetch the users once on mount with useEffect
Show a loading state while fetching
Display 3 users per page in cards (name, email, company name)
Prev / Next buttons — disabled when at the first or last page
Show "Page X of Y" between the buttons