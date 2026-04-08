import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
       <Link href="/counter" className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Counter Challenge
        </Link>

         <Link href="/todo-list" className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          To-Do List Challenge
        </Link>

        <Link href="/fetch-display-data" className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Fetch and Display Data Challenge
        </Link>

         <Link href="/accordion" className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Accordion Challenge
        </Link>
      </main>
    </div>
  );
}
