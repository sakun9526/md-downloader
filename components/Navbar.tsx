"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { useMarkdownStore } from "@/store/useMarkdownStore";

function Navbar() {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const [isEditing, setIsEditing] = useState(false);
  const fileName = useMarkdownStore((state) => state.fileName);
  const setFileName = useMarkdownStore((state) => state.setFileName);

  const handleFilenameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileName(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsEditing(false);
    }
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  return (
    <nav className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          {!loading && session ? (
            <div className="flex space-x-4">
              {isEditing ? (
                <input
                  type="text"
                  value={fileName}
                  onChange={handleFilenameChange}
                  onBlur={handleBlur}
                  onKeyDown={handleKeyDown}
                  autoFocus
                  className="py-5 px-2 border border-gray-300 rounded focus:outline-none focus:border-transparent"
                />
              ) : (
                <span
                  onClick={() => setIsEditing(true)}
                  className="py-5 px-3 text-gray-700 hover:text-gray-900 cursor-pointer"
                  title="Click to edit"
                >
                  {fileName}
                </span>
              )}
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-1">
              <p className="py-5 px-3 text-gray-700 hover:text-gray-900">
                Login to edit file name
              </p>
            </div>
          )}

          <div className="hidden md:flex items-center space-x-2">
            {!loading && !session && (
              <button
                onClick={() => signIn()}
                className="py-2 px-3 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Login
              </button>
            )}

            {!loading && session && (
              <>
                <span className="text-gray-700">
                  Hello, {session.user?.name}
                </span>
                <button
                  onClick={() => signOut()}
                  className="py-2 px-3 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            )}

            <Link
              href=""
              className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
            >
              Download
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
