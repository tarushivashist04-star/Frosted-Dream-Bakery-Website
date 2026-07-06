import { ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar({ cartItems }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black via-stone-900 to-black shadow-lg">
      <div className="flex items-center justify-between px-10 py-4 text-white">

        {/* LOGO */}
        <h1 className="text-2xl font-serif font-semibold">
          Frosted <span className="text-[#D97745]">Dreams</span>
        </h1>

        {/* ✅ UPDATED MENU */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          
          <li>
            <Link to="/" className="hover:text-[#D97745] cursor-pointer">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-[#D97745] cursor-pointer">
              About
            </Link>
          </li>

          <li>
            <a href="#contact" className="hover:text-[#D97745] cursor-pointer">
              Contact
            </a>
          </li>

        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6">

          <Link to="/profile">
            <User className="cursor-pointer hover:text-[#D97745]" />
          </Link>

          <Link to="/cart">
            <div className="relative cursor-pointer hover:text-[#D97745]">
              <ShoppingCart />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#D97745] text-black text-xs px-1 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </div>
          </Link>

          <Link to="/cart">
            <button className="bg-[#D97745] text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-[#c4683c] hover:scale-105 transition">
              Order Now
            </button>
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;