import { Link, useLocation } from "react-router-dom";
import { Home, Package, Camera } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  return (
    <>
      <div className="w-64 h-screen bg-gray-100 text-black flex flex-col border-r-2">
        <div className="bg-gray-100 flex items-center justify-center border-b-2">
          <Camera />
          <h1 className="text-xl font-bold p-[0.87rem]">Digikinz.co</h1>
        </div>
        <div className="flex-grow p-4">
          <Link
            to="/home"
            className={`flex items-center gap-3 mb-4 p-3 rounded-lg transition-all ${location.pathname === "/home" ? "bg-primary text-white" : "text-muted-foreground hover:text-primary"
              }`}
          >
            <Home className="h-4 w-4" />
            Home
          </Link>
          <Link
            to="/orders"
            className={`flex items-center gap-3 mb-4 p-3 rounded-lg transition-all ${location.pathname === "/orders" ? "bg-primary text-white" : "text-muted-foreground hover:text-primary"
              }`}
          >
            <Package className="h-4 w-4" />
            Orders
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
