import HeroImage from '../../assets/img/Hero.png';

const Hero = () => {
    return (
        <>
            <header className="flex min-h-screen">
                <div className="container flex flex-1 px-6 py-16 mx-auto justify-start">
                    <div className="flex w-full flex-col md:flex-row">
                        <div className="w-full md:w-[50%] flex-grow tablet:mt-[8%] text-left my-auto md:mt-10">
                            <h1 className="text-2xl tablet:text-3xl font-bold text-black desktop:text-4xl md:text-4xl">
                                Fastest <span className="text-[#FF3230]">Grocery</span>  <br />
                                <span className="text-[#FF3230]">Delivery </span>Delights
                            </h1>
                            <p className="mt-8 text-[#000000] text-xl tablet:text-base desktop:w-[40%] tablet:w-[80%]  md:w-[50%] font-light">
                                At the forefront of delivery innovation. HopePoint embraces
                                cutting-edge solutions for a smarter, more efficient delivery
                                experience.
                            </p>
                            <button className="px-10 w-auto py-2 mt-8 text-xl tracking-wider text-white Capitalize transition-colors duration-300 transform bg-[#FF3230] rounded-lg hover:bg-[#9f58e1] focus:outline-none focus:bg-[#FF3230]">
                                Join us
                            </button>
                        </div>
                        <div className="w-full tablet:w-[60%] desktop:w-[30%] md:w-[40%] flex-grow desktop:mt-[-2%] tablet:mt-[0%] my-auto">
                            <img className="w-full h-full" src={HeroImage} alt="logo" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Hero;
