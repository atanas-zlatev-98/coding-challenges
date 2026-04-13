Task: Paginated user list
Build a React component that fetches users from https://jsonplaceholder.typicode.com/users and displays them 3 per page with pagination controls.
Requirements:

Fetch the users once on mount with useEffect
Show a loading state while fetching
Display 3 users per page in cards (name, email, company name)
Prev / Next buttons — disabled when at the first or last page
Show "Page X of Y" between the buttons



NEW TASK:

Task: Add search filtering to your pagination component
Extend your existing component with a search input that filters users by name in real time.
Requirements:

Add a text input above the user list
As the user types, filter the list to only show users whose name includes the search string (case-insensitive)
Pagination should work on the filtered results, not the full list
When the search term changes, reset to page 1
If no users match, show a "No users found" message
