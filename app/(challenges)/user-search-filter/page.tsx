"use client";
import { useEffect, useState } from "react";
import { User } from "./types/user";
import Link from "next/link";

export default function UserSearchFilter() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        setUsers(await response.json());
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="flex justify-center flex-col items-center h-screen">
      <h1>User Search Filter</h1>

      <input
        className="bg-white text-black p-2 rounded"
        type="text"
        placeholder="Search users by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        disabled={loading}
      />

      <ul className="flex flex-col items-start mt-4 gap-2">

        {error && <li>{error}</li>}

        {loading ? ( <p>Loading...</p>) : (
          <>
            {filteredUsers.map((user) => (
              <li className="bg-green-800 rounded p-1" key={user.id}>
                {user.name} - {user.email}
              </li>
            ))}
            {filteredUsers.length === 0 && <li>No users found</li>}
          </>
        )}
      </ul>
      <div className="mt-5">
              <Link href="https://github.com/atanas-zlatev-98/coding-challenges/blob/master/app/(challenges)/user-search-filter/page.tsx" className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">GitHub Link</Link>
        </div>
    </div>
  );
}
