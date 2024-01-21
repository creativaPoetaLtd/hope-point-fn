import Logo from '../../assets/img/Logo.svg'
import IG from '../../assets/img/IG.svg';
import LinkedIn from '../../assets/img/skill-icons_linkedin.svg';
import X from '../../assets/img/X.svg';

const Footer = () => {
    return (
        <footer className="bg-[#F4EFF8] mt-12">
            <div className="container p-6 mx-auto">
                <div className="desktop:flex">
                    <div className="w-full -mx-6 desktop:w-2/5">
                        <div className="px-6">
                            <a href="#">
                                <img className="w-auto h-12 mb-8" src={Logo} alt="Logo" />
                            </a>
                            <p className=" w-[70%] mt-2 text-[#000000]">Join 31,000+ other and never miss out on new tips, tutorials, and more.</p>

                            <div className="flex mt-6 -mx-2">
                                <a href="#"
                                    className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                    aria-label="Github">
                                    <img src={IG} className='w-5 h-5' alt="" />
                                </a>
                                <a href="#"
                                    className="mx-2 text-[#000000] transition-colors duration-300  hover:text-[#FF3230] "
                                    aria-label="Reddit">
                                    <img src={X} className='w-5 h-5' alt="" />
                                </a>
                                <a href="#"
                                    className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                    aria-label="Facebook">
                                    <img src={LinkedIn} className='w-5 h-5' alt="" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 desktop:mt-0 desktop:flex-1">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 desktop:grid-cols-4">
                            <div>
                                <h3 className="text-[#000000] uppercase">About</h3>
                                <a href="#" className="block mt-2 text-sm text-gray-800">Company</a>
                                <a href="#" className="block mt-2 text-sm text-gray-800">Partnership</a>
                                <a href="#" className="block mt-2 text-sm text-gray-800">Community</a>
                            </div>

                            <div>
                                <h3 className="text-[#000000] uppercase">Blog</h3>
                                <a href="#" className="block mt-2 text-sm text-gray-800">Tec</a>
                                <a href="#" className="block mt-2 text-sm text-gray-800">Music</a>
                                <a href="#" className="block mt-2 text-sm text-gray-800">Videos</a>
                            </div>

                            <div>
                                <h3 className="text-[#000000] uppercase">Products</h3>
                                <a href="#" className="block mt-2 text-sm text-gray-800">Mega cloud</a>
                                <a href="#" className="block mt-2 text-sm text-gray-800">Aperion UI</a>
                                <a href="#" className="block mt-2 text-sm text-gray-800">Meraki UI</a>
                            </div>

                            <div>
                                <h3 className="text-[#000000] uppercase">Contact</h3>
                                <span className="block mt-2 text-sm text-gray-800">+1 526 654 8965</span>
                                <span className="block mt-2 text-sm text-gray-800">example@email.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

                <div>
                    <p className="text-center text-gray-800">© HopePoint 2023 - All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer