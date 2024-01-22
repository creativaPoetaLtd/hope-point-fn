import { useRef } from "react"

const OurStory = () => {
    const firstSectionRef = useRef(null);
    const secondSectionRef = useRef(null);
    const thirdSectionRef = useRef(null);
    const scrollToSection = (ref: any) => {
        ref.current.scrollIntoView({
            behavior: 'smooth',
        });
    };
    return (
        <header className="bg-white ">
            <div ref={firstSectionRef} className="container mt-10 flex flex-col px-6 py-4 mx-auto space-y-6 laptop:h-[32rem] laptop:py-16 laptop:flex-row laptop:items-center">
                <div className="flex items-center justify-center w-full h-96 laptop:w-1/2">
                    <img className="object-cover w-full h-full max-w-2xl rounded-md" src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="apple watch photo" />
                </div>
                <div className="flex flex-col items-center w-full laptop:flex-row laptop:w-1/2">
                    <div className="flex justify-center order-2 mt-6 laptop:mt-0 laptop:space-y-3 laptop:flex-col">
                        <button
                            onClick={() => scrollToSection(firstSectionRef)}
                            className="w-3 h-3 mx-2 bg-[#FF3230] rounded-full laptop:mx-0 focus:outline-none"></button>
                        <button onClick={() => scrollToSection(secondSectionRef)} className="w-3 h-3 mx-2 bg-gray-300 rounded-full laptop:mx-0 focus:outline-none hover:bg-blue-500"></button>
                        <button onClick={() => scrollToSection(thirdSectionRef)} className="w-3 h-3 mx-2 bg-gray-300 rounded-full laptop:mx-0 focus:outline-none hover:bg-blue-500"></button>
                    </div>

                    <div className="max-w-lg laptop:mx-12 laptop:order-2">
                        <h1 className="text-3xl font-bold tracking-wide text-[#FF3230] mb-4 laptop:text-4xl">Our story</h1>
                        <h1 className="text-3xl font-semibold tracking-wide text-gray-800  laptop:text-4xl">Our Company started back in 2023</h1>
                        <p className="mt-4 text-gray-600 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.</p>
                        <p className="mt-4 text-gray-600 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.</p>
                        <p className="mt-4 text-gray-600 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.</p>
                    </div>
                </div>
            </div>
            <div ref={secondSectionRef} className="container flex flex-col px-6 py-4 mx-auto space-y-6 laptop:h-[32rem] laptop:py-16 laptop:flex-row laptop:items-center">
                <div className="flex flex-col items-center w-full laptop:flex-row laptop:w-1/2">


                    <div className="max-w-lg laptop:mx-12 laptop:order-2">
                        <h1 className="text-3xl font-bold tracking-wide text-[#FF3230] mb-4 laptop:text-4xl">Our Mission</h1>
                        <h1 className="text-3xl font-semibold tracking-wide text-gray-800  laptop:text-4xl">Our Company started back in 2023</h1>
                        <p className="mt-4 text-gray-600 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.</p>
                        <p className="mt-4 text-gray-600 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.</p>
                        <p className="mt-4 text-gray-600 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.</p>
                    </div>
                    <div className="flex justify-center order-2 mt-6 laptop:mt-0 laptop:space-y-3 laptop:flex-col">
                        <button onClick={() => scrollToSection(firstSectionRef)} className="w-3 h-3 mx-2 bg-gray-300 rounded-full laptop:mx-0 focus:outline-none hover:bg-blue-500"></button>
                        <button onClick={() => scrollToSection(secondSectionRef)} className="w-3 h-3 mx-2 bg-[#FF3230] rounded-full laptop:mx-0 focus:outline-none"></button>
                        <button onClick={() => scrollToSection(thirdSectionRef)} className="w-3 h-3 mx-2 bg-gray-300 rounded-full laptop:mx-0 focus:outline-none hover:bg-blue-500"></button>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full h-96 laptop:w-1/2">
                    <img className="object-cover w-full h-full max-w-2xl rounded-md" src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="apple watch photo" />
                </div>
            </div>
            <div ref={thirdSectionRef} className="container flex flex-col px-6 py-4 mx-auto space-y-6 laptop:h-[32rem] laptop:py-16 laptop:flex-row laptop:items-center">
                <div className="flex items-center justify-center w-full h-96 laptop:w-1/2">
                    <img className="object-cover w-full h-full max-w-2xl rounded-md" src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="apple watch photo" />
                </div>
                <div className="flex flex-col items-center w-full laptop:flex-row laptop:w-1/2">
                    <div className="flex justify-center order-2 mt-6 laptop:mt-0 laptop:space-y-3 laptop:flex-col">
                        <button onClick={() => scrollToSection(firstSectionRef)} className="w-3 h-3 mx-2 bg-gray-300 rounded-full laptop:mx-0 focus:outline-none hover:bg-blue-500"></button>
                        <button onClick={() => scrollToSection(secondSectionRef)} className="w-3 h-3 mx-2 bg-gray-300 rounded-full laptop:mx-0 focus:outline-none hover:bg-blue-500"></button>
                        <button onClick={() => scrollToSection(thirdSectionRef)} className="w-3 h-3 mx-2 bg-[#FF3230] rounded-full laptop:mx-0 focus:outline-none"></button>
                    </div>

                    <div className="max-w-lg laptop:mx-12 laptop:order-2">
                        <h1 className="text-3xl font-bold tracking-wide text-[#FF3230] mb-4 laptop:text-4xl">Our Journey</h1>
                        <h1 className="text-3xl font-semibold tracking-wide text-gray-800  laptop:text-4xl">It has been a long but incredible journey</h1>
                        <p className="mt-4 text-gray-600 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.</p>
                        <p className="mt-4 text-gray-600 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.</p>
                        <p className="mt-4 text-gray-600 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.</p>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default OurStory