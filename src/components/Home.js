import React, { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to an API
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="text-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4  bg-gradient-to-r from-[#ff9a9e] via-[#fecfef] to-[#ffdde1]  bg-clip-text  text-transparent ">
        Sign Up
      </h2>

      <div className="mb-4">
        <label className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center  font-bold leading-none tracking-tighter text-transparent">
          Username
        </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border  bg-black border-gray-300 rounded-lg px-4 py-2 w-full"
          placeholder="Enter your username"
          required
        />
      </div>

      <div className="mb-6">
        <label className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center  font-bold leading-none tracking-tighter text-transparent">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border  bg-black border-gray-300 rounded-lg px-4 py-2 w-full"
          placeholder="Enter your password"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 w-full"
      >
        Sign Up
      </button>
    </form>
  );
}
