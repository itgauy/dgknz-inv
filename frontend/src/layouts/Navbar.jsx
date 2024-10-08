import { Link } from "react-router-dom";
import { User } from "lucide-react"; // Assuming you have a user icon

const Navbar = () => {
  return (
    <>
      <nav className="w-full bg-gray-100 p-4 flex justify-between items-center border-b-2">
        <div>
          {/* Empty div to align the icon to the right */}
        </div>
        <div>
          <Link to="/profile" className="hover:text-gray-400">
            <User className="h-6 w-6" />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
