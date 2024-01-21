import { useState } from 'react';
import Logo from '../../assets/img/Logo.svg';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white h-16 shadow fixed desktop:top-0 left-0 w-full z-10">
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <a href="#Home">
                        <img className="w-auto desktop:h-10 tablet:h-7" src={Logo} alt="" />
                    </a>
                    <div className="flex desktop:hidden tablet:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="text-gray-900 dark:text-gray-900 hover:text-gray-900 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                            aria-label="toggle menu"
                        >
                            {!isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                <div
                    className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto ${isOpen ? 'opacity-100' : 'opacity-0 -translate-x-full'
                        } md:opacity-100 md:translate-x-0`}
                >
                    <div className="flex flex-col font-semibold text-xl md:flex-row desktop:mx-[-50%] md:mx-4">
                        <Link
                            activeClass='active'
                            to="Hero"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={900}
                            className="my-4 text-gray-900 transition-colors duration-300 transform hover:text-[#FF3230] md:mx-8 md:my-0" href="#Home">
                            Home
                        </Link>
                        <Link
                            activeClass='active'
                            to="About"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={900}
                            className="my-4 text-gray-900 transition-colors duration-300 transform hover:text-[#FF3230] md:mx-8 md:my-0" href="#Home">
                            About
                        </Link>
                        <Link
                            activeClass='active'
                            to="Testmonial"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={900}
                            className="my-4 text-gray-900 transition-colors duration-300 transform hover:text-[#FF3230] md:mx-8 md:my-0" href="#Home">
                            Services
                        </Link>

                        <a className="my-4 text-gray-900 transition-colors duration-300 transform hover:text-[#FF3230] md:mx-8 md:my-0" href="#">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
