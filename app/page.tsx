import Link from "next/link";
import { pageLinks } from "./page-links/page-links";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-[1200px] flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-200 mb-7">Coding Challenges</h1>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {pageLinks.map((link) => link.category === "components" && (<Link key={link.href} href={link.href} className="flex rounded border text-center items-center justify-center  text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 hover:bg-white hover:text-black">
            {link.label}
          </Link>))}
       </div>
         <h2 className="text-5xl font-bold text-gray-800 dark:text-gray-200 mb-7">React Hooks usage</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {pageLinks.map((link) => link.category === "hooks" && (<Link key={link.href} href={link.href} className="flex rounded border text-center items-center justify-center  text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 hover:bg-white hover:text-black">
            {link.label}
          </Link>))}
       </div>

           <h2 className="text-5xl font-bold text-gray-800 dark:text-gray-200 mb-7">State Management</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {pageLinks.map((link) => link.category === "state-management" && (<Link key={link.href} href={link.href} className="flex rounded border text-center items-center justify-center  text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 hover:bg-white hover:text-black">
            {link.label}
          </Link>))}
       </div>

      </main>
    </div>
  );
}
