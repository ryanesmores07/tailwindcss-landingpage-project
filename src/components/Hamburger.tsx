import React from "react";

const Hamburger = () => {
  const btn = document.getElementById("menu-btn");
  const nav = document.getElementById("menu");

  const toggleButton = () => {
    btn?.classList.toggle("open");
    nav?.classList.toggle("hidden");
    nav?.classList.toggle("flex");
  };

  return (
    <>
      <div style={{ position: "absolute", right: "2rem" }}>
        <button
          onClick={toggleButton}
          id="menu-btn"
          className="block hamburger md:hidden focus:outline-none"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <div className="md:hidden">
        <div
          id="menu"
          className="absolute flex-col items-center hidden self-end  py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        >
          <a href="#">Pricing</a>
          <a href="#">Product</a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Community</a>
        </div>
      </div>
    </>
  );
};

export default Hamburger;
