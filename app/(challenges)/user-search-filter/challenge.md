Challenge: User Search Filter
Build a single component UserSearch that:

Fetches a list of users from https://jsonplaceholder.typicode.com/users on mount
Displays each user's name and email in a list
Has a text input at the top — filtering the list in real time as you type (match against name, case-insensitive)
Shows "No users found" if the filter matches nothing
Shows a loading state while fetching