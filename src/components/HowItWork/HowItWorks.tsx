import Package from '../../assets/img/Package.svg';
import bicycle from '../../assets/img/bicycle.svg';

const HowItWorks = () => {
    return (
        <section className="bg-white ">
            <h2 className="text-3xl mt-10 font-bold mb-8 text-center">How It <span className="text-[#FF3230]">works?</span></h2>
            <p className="mb-8 text-center text-[#7C7C7C] max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet consectetur. Nunc sed euismod ac egestas id. Suscipit et molestie ut dolor ut pellentesque elit.
            </p>
            <div className="container px-6 py-12 mx-auto">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 desktop:grid-cols-3">
                    <div>
                        <img
                            className="w-28 h-28"
                            src={Package}
                        />

                        <h1 className="mt-4 text-xl font-semibold text-gray-800 ">We got your package</h1>

                        <p className="mt-2 text-gray-500 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim fusce tortor, ac sed malesuada blandit. Et mi gravida sem feugiat.</p>
                    </div>

                    <div>
                        <svg className="w-28 h-19" viewBox="0 0 30 30" fill="none">
                            <path d="M27.3633 7.08984H26.4844V6.21094C26.4844 4.75705 25.3015 3.57422 23.8477 3.57422H4.39453C2.94064 3.57422 1.75781 4.75705 1.75781 6.21094V21.1523H0.878906C0.393516 21.1523 0 21.5459 0 22.0312V23.7891C0 25.2429 1.18283 26.4258 2.63672 26.4258H27.3633C28.8172 26.4258 30 25.2429 30 23.7891V9.72656C30 8.27268 28.8172 7.08984 27.3633 7.08984ZM3.51562 6.21094C3.51562 5.72631 3.9099 5.33203 4.39453 5.33203H23.8477C24.3323 5.33203 24.7266 5.72631 24.7266 6.21094V7.08984H20.332C18.8781 7.08984 17.6953 8.27268 17.6953 9.72656V21.1523H3.51562V6.21094ZM1.75781 23.7891V22.9102H17.6953V23.7891C17.6953 24.0971 17.7489 24.3929 17.8465 24.668H2.63672C2.15209 24.668 1.75781 24.2737 1.75781 23.7891ZM28.2422 23.7891C28.2422 24.2737 27.8479 24.668 27.3633 24.668H20.332C19.8474 24.668 19.4531 24.2737 19.4531 23.7891V9.72656C19.4531 9.24193 19.8474 8.84766 20.332 8.84766H27.3633C27.8479 8.84766 28.2422 9.24193 28.2422 9.72656V23.7891Z" fill="#2D3748" /><path d="M24.7266 21.1523H22.9688C22.4834 21.1523 22.0898 21.5459 22.0898 22.0312C22.0898 22.5166 22.4834 22.9102 22.9688 22.9102H24.7266C25.212 22.9102 25.6055 22.5166 25.6055 22.0312C25.6055 21.5459 25.212 21.1523 24.7266 21.1523Z" fill="#4299E1" /><path d="M23.8477 12.3633C24.3331 12.3633 24.7266 11.9698 24.7266 11.4844C24.7266 10.999 24.3331 10.6055 23.8477 10.6055C23.3622 10.6055 22.9688 10.999 22.9688 11.4844C22.9688 11.9698 23.3622 12.3633 23.8477 12.3633Z" fill="#4299E1" />
                        </svg>

                        <h1 className="mt-4 text-xl font-semibold text-gray-800 ">Book your available time</h1>

                        <p className="mt-2 text-gray-500 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim fusce tortor, ac sed malesuada blandit. Et mi gravida sem feugiat.</p>
                    </div>

                    <div>
                        <img className="w-30 h-28" src={bicycle} />
                        <h1 className="mt-4 text-xl font-semibold text-gray-800 ">Package delivered</h1>

                        <p className="mt-2 text-gray-500 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim fusce tortor, ac sed malesuada blandit. Et mi gravida sem feugiat.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks