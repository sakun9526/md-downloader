import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">

            <div className="hidden md:flex items-center space-x-1">
              <a
                href="#"
                className="py-5 px-3 text-gray-700 hover:text-gray-900"
              >
                File name
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <Link href="/login" className="py-5 px-3">
              Login
            </Link>
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
