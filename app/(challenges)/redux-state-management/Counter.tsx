'use client'

import { useSelector } from "react-redux";
import {  RootState, useAppDispatch } from "./store/store";
import { increment, decrement, incrementByAmount } from "./slices/counterSlice";

export default function Counter() {
  
  const count = useSelector((state:RootState)=>state.counter.value);
  const dispatch = useAppDispatch();

  return (
      <div className="flex justify-center items-center h-screen flex-col gap-4">
        <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-200">Redux State Management Counter</h1>
        <p className="text-2xl text-gray-600 dark:text-gray-400">Redux State Management challenge page.</p>
        <div className="flex flex-col justify-center gap-2">
          <p className="text-center text-4xl font-bold">{count}</p>
          <div className="flex gap-2">
            <button className="cursor-pointer p-2 bg-blue-700 rounded" onClick={() => dispatch(increment())}>Increment</button>
            <button className="cursor-pointer p-2 bg-green-700 rounded" onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
            <button className="cursor-pointer p-2 bg-red-700 rounded" onClick={() => dispatch(decrement())}>Decrement</button>
          </div>
        </div>
      </div>
  );
}