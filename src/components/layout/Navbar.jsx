import { NavLink } from "react-router-dom";
import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

const navItems = [
  { path: "/", label: "Dashboard" },
  { path: "/blueprints", label: "Blueprints" },
  { path: "/contracts", label: "Contracts" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 to-blue-600 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand */}
        <h1 className="text-lg font-semibold tracking-wide text-white">
          Contract Platform
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative text-sm font-medium transition ${
                  isActive
                    ? "text-white"
                    : "text-indigo-100 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-white rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <DarkModeToggle />
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-2">
          <DarkModeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-indigo-700 px-6 pb-4">
          <div className="flex flex-col gap-4">
            {navItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium ${
                    isActive
                      ? "text-white"
                      : "text-indigo-100 hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
