import React from "react";
import logo from "../assets/images/logo-white.svg";
import icon1 from "../assets/images/icon-facebook.svg";
import icon2 from "../assets/images/icon-youtube.svg";
import icon3 from "../assets/images/icon-twitter.svg";
import icon4 from "../assets/images/icon-pinterest.svg";
import icon5 from "../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-veryDarkBlue">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div>
          <div>
            <img src={logo} alt="logo" className="h-8" />
          </div>
          <div className="flex justify-center space-x-4">
            <a href="#">
              <img src={icon1} alt="icon1" className="h-8" />
            </a>
            <a href="#">
              <img src={icon2} alt="icon2" className="h-8" />
            </a>
            <a href="#">
              <img src={icon3} alt="icon3" className="h-8" />
            </a>
            <a href="#">
              <img src={icon4} alt="icon4" className="h-8" />
            </a>
            <a href="#">
              <img src={icon5} alt="icon5" className="h-8" />
            </a>
          </div>
        </div>
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">
              Home
            </a>
            <a href="#" className="hover:text-brightRed">
              Pricing
            </a>
            <a href="#" className="hover:text-brightRed">
              Products
            </a>
            <a href="#" className="hover:text-brightRed">
              About
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">
              Careers
            </a>
            <a href="#" className="hover:text-brightRed">
              Community
            </a>
            <a href="#" className="hover:text-brightRed">
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
