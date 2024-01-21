import { useEffect, useState } from "react";

const Testmonial = () => {
    const testimonials = [
        {
            image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
            title: 'Help us improve our productivity',
            content: 'Lorem ipsum dolor sit amet consectetur. Volutpat libero suspendisse facilisis neque imperdiet in. Faucibus consectetur urna morbi amet turpis ut tristique. Massa eleifend volutpat a amet facilisis duis. Vulputate tortor et eget augue donec lacus. ',
            author: 'Ronik Ederson',
            position: 'Marketing Manager at Stech.co',
        },
        {
            image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
            title: 'Help us improve our productivity',
            content: ' Lorem ipsum dolor sit amet consectetur. Volutpat libero suspendisse facilisis neque imperdiet in. Faucibus consectetur urna morbi amet turpis ut tristique. Massa eleifend volutpat a amet facilisis duis. Vulputate tortor et eget augue donec lacus. ',
            author: 'KANANURA Abdoul Khaliq',
            position: 'Marketing Manager at Stech.co',
        },
        {
            image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
            title: 'Help us improve our productivity',
            content: ' Lorem ipsum dolor sit amet consectetur. Volutpat libero suspendisse facilisis neque imperdiet in. Faucibus consectetur urna morbi amet turpis ut tristique. Massa eleifend volutpat a amet facilisis duis. Vulputate tortor et eget augue donec lacus. ',
            author: 'UWASE Pamella',
            position: 'Marketing Manager at Stech.co',
        }
    ];

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const handleNextTestimonial = () => {
        setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handePrevTestimonial = () => {
        setCurrentTestimonial((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            handleNextTestimonial();
        }, 5000);
        return () => clearInterval(intervalId);
    }, [currentTestimonial]);

    return (
        <section className="testimonial-section">
            <div className="relative flex">
                <div className="min-h-screen desktop:w-1/3"></div>
                <div className="hidden w-3/4 min-h-screen rounded-md bg-gray-100 desktop:block transition-opacity duration-500"></div>
                <div className="container flex flex-col text-left w-full min-h-screen px-6 py-10 mx-auto desktop:absolute desktop:inset-x-0 transition-opacity duration-500">
                    <h1 className="text-2xl font-semibold text-gray-800 capitalize desktop:text-3xl ">
                        What our <span className="text-[#FF3230]">customers</span> <br /> are saying
                    </h1>
                    <div className="mt-10 desktop:mt-20 desktop:flex desktop:items-center">
                        <img className="object-cover object-center w-full desktop:w-[32rem] rounded-md h-96" src={testimonials[currentTestimonial].image} alt="" />
                        <div className="mt-8 desktop:mx-6 desktop:px-10 desktop:mt-0">
                            <h1 className="text-2xl font-semibold text-gray-800 desktop:w-72">
                                {testimonials[currentTestimonial].title}
                            </h1>
                            <p className="desktop:w-[70%] w-full mt-6 text-gray-500">
                                “{testimonials[currentTestimonial].content}”
                            </p>
                            <h3 className="mt-6 text-desktop font-medium text-[#FF3230]">
                                {testimonials[currentTestimonial].author}
                            </h3>
                            <p className="text-gray-600 ">{testimonials[currentTestimonial].position}</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-12 desktop:justify-start">
                        <button title="left arrow" className="p-2 text-[#FF3230] transition-colors duration-300 border rounded-full rtl:-scale-x-100 border-[#FF3230] bg-[#FF3230] hover:bg-[#fd6764]" onClick={handePrevTestimonial}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 " fill="none" viewBox="0 0 24 24" stroke="#FFFFFF" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button title="right arrow" className="p-2 text-[#FF3230] transition-colors duration-300 border rounded-full rtl:-scale-x-100 border-[#FF3230] bg-[#FF3230] hover:bg-[#fd6764] desktop:mx-6 " onClick={handleNextTestimonial}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#FFFFFF" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testmonial;
