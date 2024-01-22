import { Link } from 'react-router-dom'
const Features = () => {
    return (
        <>
            <section className="bg-white ">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize desktop:text-3xl ">Our <span className="text-[#FF3230]">Partners?</span></h1>

                    <div className="grid grid-cols-1 gap-8 mt-8 desktop::mt-12 desktop:gap-16 md:grid-cols-2 desktop:grid-cols-3">
                        <div className="flex flex-col items-center p-6 space-y-3 text-center bg-[#F4EFF8] rounded-xl ">
                            <span className="inline-block p-3 text-[#FF3230] bg-[#f4e7e7] rounded-full ">
                                <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </span>

                            <h1 className="text-xl font-semibold text-gray-700 capitalize ">Online Shop</h1>

                            <p className="text-gray-500 ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                            </p>

                        </div>

                        <div className="flex flex-col items-center p-6 space-y-3 text-center bg-[#F4EFF8] rounded-xl ">
                            <span className="inline-block p-3 text-[#FF3230] bg-[#f4e7e7]  rounded-full ">
                                <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M4 10a6 6 0 1112 0 6 6 0 01-12 0zm6-4a1 1 0 00-2 0v4a1 1 0 102 0V6zm-1.5 10h3a.5.5 0 010 1h-3a.5.5 0 010-1z" clipRule="evenodd"></path>
                                </svg>

                            </span>

                            <h1 className="text-xl font-semibold text-gray-700 capitalize">E-commerse</h1>

                            <p className="text-gray-500 ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                            </p>

                        </div>

                        <div className="flex flex-col items-center p-6 space-y-3 text-center bg-[#F4EFF8] rounded-xl ">
                            <span className="inline-block p-3 text-[#FF3230] bg-[#f4e7e7] rounded-full  ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </span>
                            <h1 className="text-xl font-semibold text-gray-700 capitalize">Shipping company</h1>
                            <p className="text-gray-500 ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                            </p>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features