'use client';
import { useMemo, useState } from "react";

export default function UseMemoPage() {

    const [count, setCount] = useState(0); // State to trigger re-renders

    // Simulating a large array of items, where we want to find the selected item
    const [items] = useState(() => new Array(10_000_000).fill(0).map((_, i) => {return { id: i, selectedItem: i === 9_999_999 }}));

    /* Every time the component re-renders, this find operation is performed, 
    it loops through the entire array and takes a lot of time to loop through 10 million items */

    //  ----> HERE: const selectedItem = arrayOfItems.find(item => item.selectedItem);

    /* --- useMemo can be used to memoize the selected item --- */
    //Only re-runs the function when the items array changes, otherwise it returns the memoized value from the previous render
    const memoizedSelectedItem = useMemo(() => items.find(item => item.selectedItem), [items]);


    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <h1>Count: {count}</h1>
            <h2>Selected Item: {memoizedSelectedItem?.id}</h2>
            <button className="p-2 bg-blue-700 rounded cursor-pointer" onClick={() => setCount(count + 1)}>Increment Count</button>
        </div>
    )
}