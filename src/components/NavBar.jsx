import React, { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { NavLink } from "react-router-dom";
import { Search } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    let NavItem = [
        {
            name: "Home",
            To: "/"
        },
        {
            name: "Contact",
            To: "/Contact"
        },
        {
            name: "Products",
            To: "/Products"
        },
        {
            name: "Cart",
            To: "/Cart"
        }
    ]

    return (
        <nav className=" border-b border-gray-200 shadow-md sticky border-t-fuchsia-200 backdrop-blur-sm top-0 z-50 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className=" flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#" className=" cursor-pointer text-xl font-bold ">
                            <img className=" w-24 md:w-32 bg-white rounded-lg" src="/logo.png" alt="" />
                        </a>
                    </div>
                    <div className=" hidden md:flex relative items-center">
                        <Search className=" absolute left-3 text-black "></Search>
                        <input className="bg-green-100 rounded w-[300px] h-8 text-black text-center" type="text" name="" id="" />
                    </div>


                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">

                        {NavItem.map((e, i) => {
                            return <>
                                <NavLink to={e.To} className={" cursor-pointer hover:border-b-2 hover:border-green-600 hover:text-gray-300 active:text-purple-600 "} >{e.name}</NavLink>
                            </>
                        })}

                        <ModeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="  focus:outline-none focus:ring-2 focus:ring-gray-200 active:text-purple-600"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="space-y-2 px-2 pt-2 pb-3">
                            {NavItem.map((e, i) => {
                                return <>
                                    <NavLink onClick={()=>setIsOpen(false)} to={e.To} className={"block  hover:text-gray-800 px-3 py-2 rounded-md text-base font-medium"} >{e.name}</NavLink>
                                </>
                            })}

                            <ModeToggle />
                        </div>
                    </div>
                )}
                <div className=" md:hidden flex relative items-center pb-6">
                    <Search className=" absolute left-2 text-black "></Search>
                    <input className="bg-gray-100 rounded w-full h-10 text-black text-center" type="text" name="" id="" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
