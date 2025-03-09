import React, { useEffect, useState } from "react";

const originalUser = {
  name: "David",
  username: "greylon",
  skill: "react developer",
};

export default function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const storedUser = JSON.parse(localStorage.getItem("users")) || null;
      if (!storedUser) {
        setUser(originalUser);
      } else {
        setUser(storedUser);
      }
      setIsLoading(false);
    }, 1000);
  }, []);

  function handleAddUser() {
    localStorage.setItem("users", JSON.stringify(originalUser));
    setUser(originalUser);
    console.log(originalUser);
  }

  return (
    <div className="screen flex justify-center items-center flex-col min-h-screen bg-purple-100">
      <h1 className="text-3xl font-bold text-purple-600 mb-4">User</h1>

      <div className="flex flex-col justify-center items-center border-2 bg-purple-200 border-purple-400 p-5 rounded-xl shadow-md hover:bg-purple-300 transition-all">
        <button
          onClick={handleAddUser}
          className="border-2 rounded-xl px-5 py-2 bg-purple-300 hover:bg-purple-400 transition-all"
        >
          Add User
        </button>
      </div>

      <div className="flex flex-col items-center mt-4">
        {isLoading ? (
          <div className="size-10 border-4 border-purple-900 border-t-purple-500 rounded-full animate-spin"></div>
        ) : user ? (
          <>
            <h2 className="font-bold text-md text-purple-600">{user.name}</h2>
            <h2 className="text-md text-purple-600">{user.username}</h2>
            <h2 className="text-md text-purple-600">{user.skill}</h2>
          </>
        ) : (
          <h2 className="text-md text-red-500">No user data available</h2>
        )}
      </div>
    </div>
  );
}
