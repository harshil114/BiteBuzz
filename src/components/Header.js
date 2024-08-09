import logo from "../assets/logo.jpg";
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  

  return (
    <div className="header flex justify-between items-center shadow-xl p-7">
      <div className="logo-container cursor-pointer">
        <Link to="/"><img className="logo h-9 w-56 object-fill" src={logo} /></Link>
      </div>

      <div className="nav-items mr-9">
        <ul className="flex">
          <li className="mr-7 text-lg font-medium hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-7 text-lg font-medium hover:underline">
            <Link to="/about">About Us</Link>
          </li>
          <li className="mr-7 text-lg font-medium hover:underline">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="mr-7 text-lg font-medium hover:underline">
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
          {/* <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
