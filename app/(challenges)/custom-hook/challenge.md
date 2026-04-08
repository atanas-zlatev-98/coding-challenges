Custom Hook 🟡 Medium
Extract logic into a reusable hook called useLocalStorage:

Works like useState but persists the value in localStorage
Signature should be: useLocalStorage<T>(key: string, initialValue: T)
Returns [value, setValue] just like useState

Then use it in a component — a simple input that remembers its value after a page refresh is enough to demonstrate it.