import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-blue-600"
        >
          <FaUsers />
          <span>User Manager</span>
        </Link>

        <Link
          to="/add-user"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300"
        >
          Add User
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;