import Link from "next/link";

export default function NavigationBar() {
    return (
        <nav className="w-full bg-black border-b border-gray-700 text-white p-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="text-2xl font-bold">Coding Challenges</div>
                <div className="flex space-x-4">
                    <Link href="/" className="hover:bg-gray-700 px-3 py-2 rounded">Home</Link>
                </div>
            </div>
        </nav>
    )
}