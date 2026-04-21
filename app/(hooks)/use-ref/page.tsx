'use client';

import { useRef, useEffect, useState } from 'react';

const usePrevious = <T,>(value: T): T | undefined => {
  const ref = useRef<T | undefined>(undefined);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export default function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div className='flex justify-center items-center h-screen flex-col gap-2'>
      <p>Current: {count}</p>
      <p>Previous: {prevCount ?? 'none'}</p>
      <button className='bg-blue-600 p-1 rounded cursor-pointer' onClick={() => setCount(c => c + 1)}>Add 1</button>
      <button className='bg-blue-600 p-1 rounded cursor-pointer' onClick={() => setCount(c => c - 1)}>Subtract 1</button>
    </div>
  );
}