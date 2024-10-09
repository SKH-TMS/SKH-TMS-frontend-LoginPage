"use client";

import { useState } from "react";
export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend-only and no actual login functionality
    console.log("Logging in with:", { email, password });
  };

  return (

      <div className="bg-[#D2E8E3] my-5 ">
        <div className="flex h-screen items-center justify-center bg-[#D2E8E3]">
      <div className="w-full max-w-md p-6 bg-[#ECFBF4] shadow-md rounded-lg">
        <form onSubmit={handleSubmit}>
          <h2 className="text-black text-2xl font-bold text-center mb-6">Login to Your Account</h2>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className=" text-black w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="text-black w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#0F6466] text-white font-semibold rounded-lg hover:bg-[#2C3532] transition-colors"
          >
            Log In
          </button>

          <div className="text-center mt-4">
            <a href="#" className="text-sm text-black hover:underline">
              Forgot your password?
            </a>
          </div>
        </form>
      </div>
    </div>
      </div>

  );
}
