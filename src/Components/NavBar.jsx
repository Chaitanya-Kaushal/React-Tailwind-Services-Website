import React from "react";
import { Link } from "react-router-dom";
import {HashLink} from 'react-router-hash-link'

const NavBar = () => {
  return (
    <div className="flex justify-between items-center  py-6 px-8 shadow-md sticky top-0 z-99  bg-white">
      <div>
        <h1 className="hidden md:block text-2xl font-bold">TECHYSTAR.</h1>
      </div>
      <div className="flex justify-end items-center text-green-900  ">
        <HashLink to={"/#home"} className=" ml-6 sm:ml-8 lg:ml-12 hover:text-blue-500">Home</HashLink>
        <HashLink to={"/#about"} className=" ml-6 sm:ml-8 lg:ml-12 hover:text-blue-500">About</HashLink>
        <HashLink to={"/#brand"} className=" ml-6 sm:ml-8 lg:ml-12 hover:text-blue-500">Brands</HashLink>
        <Link to={"/contact"} className=" ml-6 sm:ml-8 lg:ml-12 hover:text-blue-500">Contact</Link>
        <Link to={"/services"} className=" ml-6 sm:ml-8 lg:ml-12 hover:text-blue-500">Services</Link>
      </div>
    </div>
  ); 
};

export default NavBar;
