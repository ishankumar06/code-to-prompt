"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Explain", href: "/explain" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="bg-black-100 shadow sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-gray-900 hover:text-blue-600 transition-colors duration-300"
        >
          Code<span className="text-blue-600">To</span>Prompt
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium text-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative group py-2 hover:text-blue-600 transition"
            >
              {item.name}
              {/* Underline animation on hover */}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-6 py-3 border-b border-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
