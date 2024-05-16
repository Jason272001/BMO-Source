// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Logo from "../../components/Logo/Logo";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import logo from "./Logo.png";

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const handleChange = () => {
    setMenu(!menu);
  };
  const closeMenu = () => {
    setMenu(false);
  };
  return (
    <div className="fixed w-full ">
      <div>
        <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_105px_rgba(0,0,0,0.2)]">
          <div className="flex flex-row items-center cursor-pointer">
            <span>
              <Logo logo={logo} className="h-20 w-20" />
            </span>
            <h1 className="text-xl font-semibold">Banh Mi Oven</h1>
          </div>
          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8 ">
            <Link className="hover:text-brightColor transition-all cursor-pointer">
            
            Inventory
            
            </Link>
            
           
            <Link className="hover:text-brightColor transition-all cursor-pointer">
            
            Request 
            
            </Link>

           

            <Link className="hover:text-brightColor transition-all cursor-pointer">
            
            History 
            
            </Link>

          </nav>

          {/* <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div> */}
        </div>
        {/* <div
          className={`${
            menu ? "" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Tab title="Home" to="home" />
          <Tab title="Menu" to="menu" />
          <Tab title="About Us" to="about" />
          <Tab title="Locations" to="location" />
          <Tab title="Franchise" to="franchise" />
          
         
        </div> */}
      </div>
    </div>
  );
};

export default Nav;
