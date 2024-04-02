// eslint-disable-next-line no-unused-vars
import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYelp } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="bg-black text-white mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-xl pb-4">Banh Mi Oven </h1>
          <p className="text-sm">
            Banh Mi Oven offers a very different experience, serving up
            delicious Vietnamese Banh Mi in our family-owned restaurants.{" "}
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Link</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href=""
            >
              Home
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href=""
            >
              Menu
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href=""
            >
              About Us
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href=""
            >
              Locations
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href=""
            >
              Franchise
            </a>
          </nav>
        </div>

        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Location</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href=""
            >
              Story Rd, San Jose , CA
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href=""
            >
              San Fernando, San Jose, CA
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href=""
            >
              Capital, San Jose, CA
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href=""
            >
              Interstate Hwy 35, Austin, TX
            </a>
          </nav>
        </div>

        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="mailto:name@gmail.com"
            >
              <div className="flex items-center">
                <MdOutlineMailOutline className="mr-2" />
                <u>name@gmail.com</u>
              </div>
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="tel:+14082712877"
            >
              <div className="flex items-center">
                <FiPhone className="mr-2" />
                <u>+1 (408)271-2877</u>
              </div>
            </a>
            <div className="flex items-center pt-4">
              <a
                href="https://www.facebook.com/banhmioven"
                className="hover:text-brightColor transition-all cursor-pointer"
              >
                <BsFacebook size={35} />
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a
                href="https://www.instagram.com/banhmioven_tx/?hl=en"
                className="hover:text-brightColor transition-all cursor-pointer"
              >
                <BsInstagram size={35} />
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a
                href="https://www.yelp.com/biz/banh-mi-oven-san-jose"
                className="hover:text-brightColor transition-all cursor-pointer"
              >
                <BsYelp size={35} />
              </a>
            </div>
          </nav>
        </div>
      </div>

      <div>
        <p className="text-center py-4">
          Designed & Developed by &nbsp;
          <a
            href="https://github.com/Jason272001"
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Myo Lwin Moe Aung
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
