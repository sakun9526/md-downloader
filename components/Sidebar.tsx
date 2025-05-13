"use client";

// components/Sidebar.js
import { useState } from 'react';
import Link from 'next/link';
import {MenuIcon, CloseIcon} from '@/icons/index'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden p-4">
        <button onClick={toggleSidebar}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-black opacity-85 text-white z-50 transform transition-transform duration-300 ease-in-out
          ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:static md:block md:min-h-screen`}
      >
        <div className="h-full p-4 space-y-4">
          <h2 className="text-2xl font-bold mb-4 border-b border-black-500 pb-2">
          <Link href="/" className="block hover:bg-black rounded px-2 py-1">
            MD Downloader
          </Link>
          </h2>
          <nav className="space-y-2">
            <Link href="/" className="block hover:bg-black rounded px-2 py-1">
              Previously saved work
            </Link>
          </nav>
        </div>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;
