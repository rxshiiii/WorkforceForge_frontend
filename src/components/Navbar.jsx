import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  // ❌ Hide navbar on mentor session page
  if (location.pathname === "/mentor") {
    return null;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0F1A]/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold">
            W
          </div>
          <span className="text-white font-semibold text-lg">
            WorkforceForge
          </span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-8 text-sm text-gray-300">
          <Link to="/" className="hover:text-white">Home</Link>
          <Link to="/about" className="hover:text-white">About</Link>
          <Link to="/contact" className="hover:text-white">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
