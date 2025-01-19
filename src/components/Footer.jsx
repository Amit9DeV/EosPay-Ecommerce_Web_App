import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaChevronUp } from "react-icons/fa";

export default function Footer() {
    let NavItem = [
        {
            name: "Home",
            To: "/"
        },
        {
            name: "Contact",
            To: "/"
        },
        {
            name: "Products",
            To: "/"
        },
        {
            name: "Cart",
            To: "/"
        }
    ]

    return (
        <>
            <div className=' h-[30vh] bg-indigo-950 ' >
                <div className=' max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'  >
                    <div className='flex items-center justify-between'>
                        <div>
                            <img className='w-64' src="black.png" alt="" />
                        </div>
                        <div className='flex flex-col items-center justify-center gap-4'  >
                            <div className='flex mt-14 text-2xl gap-2'>
                            <BsTwitterX />
                            <FaYoutube />
                            <FaTelegram />
                            <IoLogoWhatsapp />
                            </div>
                            <div className='flex items-center justify-center'>
                        <div className="hidden md:flex space-x-8 items-center">

                            {NavItem.map((e, i) => {
                                return <>
                                    <a to={e.To} className={"hover:border-b-2 hover:border-green-600 hover:text-gray-300 active:text-purple-600 "} >{e.name}</a>
                                </>
                            })}


                        </div>
                    </div>
                    <p className='text-center'>EOSPAY ECOMMERCE PRIVATE LIMITED. All rights reserved</p>
                        </div>
                        <div>
                            <FaChevronUp />
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}
