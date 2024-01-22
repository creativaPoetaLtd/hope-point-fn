import deliveryImage from '../../assets/img/delviery.svg'
const AboutUs = () => {
    return (
        <header className="bg-white ">
            <div className="container px-6 py-16 mx-auto">
                <div className="items-center mt-20 laptop:flex">
                    <div className="w-full laptop:w-1/2">
                        <div className="laptop:max-w-lg">
                            <h1 className=" font-bold uppercase laptop:text-3xl mb-9">About <span className='text-[#FF3230]'>HopePoint</span></h1>
                            <h1 className="text-3xl font-regular text-gray-800 laptop:text-4xl">We are here to help amazing online store to deliver their customer's product</h1>
                            <p className="mt-3 text-gray-600 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>

                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full mt-6 laptop:mt-0 lg:w-1/2">
                        <img className="w-full h-full laptop:max-w-3xl" src={deliveryImage} alt="delivery.svg" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default AboutUs