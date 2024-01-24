import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import { Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";

import Logo from "../../assets/img/Logo.svg"; // Import your logo

const Sidebar = () => {
    const menus = [
        { name: "dashboard", link: "/", icon: MdOutlineDashboard },
        { name: "user", link: "/", icon: AiOutlineUser },
        { name: "messages", link: "/", icon: FiMessageSquare },
        { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
        { name: "Setting", link: "/", icon: RiSettings4Line },
        { name: "Logout", link: "/", icon: IoIosLogOut },
    ];
    const [open, setOpen] = useState(true);

    return (
        <section className="flex gap-6">
            {/* Sidebar */}
            <div
                className={`bg-[#d10000] min-h-screen ${open ? "w-72" : "w-16"} duration-500 text-gray-300 px-4`}
            >
                <div className="py-3 flex justify-between items-center">
                    {/* Logo */}
                    {open && (
                        <Link to="/">
                            <img src={Logo} alt="Logo" className="w-18 h-8 cursor-pointer" />
                        </Link>
                    )}
                    {/* Hamburger Icon */}
                    <HiMenuAlt3 size={26} className="cursor-pointer" onClick={() => setOpen(!open)} />
                </div>
                <div className="mt-4 flex flex-col gap-4 relative">
                    {/* Menu Items */}
                    {menus?.map((menu, i) => (
                        <Link
                            to={menu?.link}
                            key={i}
                            className={` ${menu?.margin && "mt-5"} group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-black rounded-md`}
                        >
                            <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                            <h2
                                style={{
                                    transitionDelay: `${i + 3}00ms`,
                                }}
                                className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                                    }`}
                            >
                                {menu?.name}
                            </h2>
                            <h2
                                className={`${open && "hidden"} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                            >
                                {menu?.name}
                            </h2>
                        </Link>
                    ))}
                </div>
            </div>
            {/* Main Content */}
            <div className="m-3 text-xl text-gray-900 font-semibold">Dashboard</div>
        </section>
    );
};

export default Sidebar;
