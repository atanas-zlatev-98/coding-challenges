Task: Paginated user list
Build a React component that fetches users from https://jsonplaceholder.typicode.com/users and displays them 3 per page with pagination controls.
Requirements:

Fetch the users once on mount with useEffect
Show a loading state while fetching
Display 3 users per page in cards (name, email, company name)
Prev / Next buttons — disabled when at the first or last page
Show "Page X of Y" between the buttons


UPDATE TASK:

Task: Replace Prev/Next with page number buttons
Swap the "Previous Page" / "Next Page" buttons for a row of numbered page buttons, keeping the previous logic intact.
Requirements:

Render a button for each page number
The current page button should be visually highlighted
Clicking a page number navigates directly to that page
Keep the disabled/hidden behaviour when there are no results
Prev and Next arrows (< and >) on either side are optional but encouraged