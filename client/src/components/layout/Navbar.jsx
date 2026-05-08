import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#1f232b] border-b border-gray-700 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-center px-4">
        
        {/* Center Title */}
        <Link
          to="/"
          className="text-white text-sm md:text-base font-medium tracking-wide"
        >
          MERN stack developer practical task
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;