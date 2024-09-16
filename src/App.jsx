import React from "react";
import useUsers from "./hooks/useUsers";

function App() {
  const UserList = () => {
    const { users, error, loading } = useUsers();

    if (loading)
      return <p className="text-center text-blue-600 text-lg">Loading...</p>;
    if (error)
      return <p className="text-center text-red-500 text-lg">Error: {error}</p>;

    return (
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {users.map((user) => (
          <li
            key={user.id}
            className="p-5 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex flex-col">
              <h2 className="text-lg font-medium text-gray-900 mb-1">
                {user.name}
              </h2>
              <p className="text-sm text-gray-500">User ID: {user.id}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col justify-center items-center">
      <div className="max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
          User Directory
        </h1>
        <UserList />
      </div>
    </div>
  );
}

export default App;
