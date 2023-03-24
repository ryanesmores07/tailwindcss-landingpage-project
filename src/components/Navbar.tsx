import React from "react";
import navlogo from "../assets/images/logo.svg";
import Hamburger from "./Hamburger";

const Navbar = () => {
  return (
    <nav className="relative container mx-auto  p-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt-2">
          <img src={navlogo} alt="nav-logo" />
        </div>
        {/* Menu Items */}
        <ul className="hidden space-x-6 md:flex">
          <li>
            <a className="hover:text-darkGrayishBlue " href="#">
              Pricing
            </a>
          </li>
          <li>
            <a className="hover:text-darkGrayishBlue" href="#">
              Product
            </a>
          </li>
          <li>
            <a className="hover:text-darkGrayishBlue" href="#">
              About Us
            </a>
          </li>
          <li>
            <a className="hover:text-darkGrayishBlue" href="#">
              Careers
            </a>
          </li>
          <li>
            <a className="hover:text-darkGrayishBlue" href="#">
              Community
            </a>
          </li>
        </ul>
        {/* Button */}
        <a
          href="#"
          className="hidden pb-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
        >
          Get Started
        </a>

        <Hamburger />
      </div>
    </nav>
  );
};

export default Navbar;
