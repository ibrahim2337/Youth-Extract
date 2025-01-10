import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Flash-sale", path: "/flash-sale" },
    { name: "Contact", path: "/contact" },
    { name: "About Us", path: "/about" },
  ];

  const isActive = (path) => {
    if (path.includes("#")) {
      return location.hash === path.split("#")[1] ? true : false;
    }
  };

  return (
    <nav className="bg-white shadow" role="navigation">
      <div className="flex justify-between items-center py-8 lg:px-20 px-4">
        <div>
          <Link to="/" className="text-3xl font-bold text-gray-800">
            Youth <span className="text-[#48B4BB]">Extract.</span>
          </Link>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-gray-800 text-3xl focus:outline-none cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <span>&times;</span> : <span>&#9776;</span>}
        </button>

        <div className={`hidden lg:flex items-center gap-8`}>
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`font-bold hover:text-[#48B4BB]  transition cursor-pointer ${
                isActive(item.path)
                  ? "text-[#48B4BB] transition scale-125"
                  : "text-gray-700"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <input
              type="text"
              className="py-2 pl-3 pr-4 border rounded-lg focus:outline-none"
              placeholder="Search..."
            />
          </div>
          <Link
            to="/login"
            className="bg-gradient-to-r from-[#48B4BB] to-[#63d8e0] font-bold uppercase border text-white lg:px-6 px-3 lg:py-2 py-1.5 rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:from-[#63d8e0] hover:to-[#48B4BB] hover:shadow-lg"
          >
            Sign up
          </Link>
        </div>
      </div>

      <div
        className={`lg:hidden bg-white shadow-md transition-transform duration-300 ease-in-out flex flex-col items-center justify-center ${
          isMenuOpen
            ? "transform translate-y-0"
            : "max-h-0 transform -translate-y-full"
        } overflow-hidden`}
        style={{ height: isMenuOpen ? "500px" : "0" }}
      >
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`py-3 font-bold text-xl  w-full text-center cursor-pointer ${
              isActive(item.path)
                ? "text-[#48B4BB] transition scale-125"
                : "text-gray-700"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
