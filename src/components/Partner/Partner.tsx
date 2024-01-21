import airtel from '../../assets/img/airtel.png';
import mtn from '../../assets/img/mtn.png';
import Dropbox from '../../assets/img/Dropbox.png';
import Trello from '../../assets/img/trello.png';
import Slack from '../../assets/img/Slack.png';
import RDB from '../../assets/img/rdb.png'

const Partnership = () => {
    return (
        <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Trusted Partners</h2>
            <p className="mb-8 text-center text-[#7C7C7C] max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet consectetur. Nunc sed euismod ac egestas id. Suscipit et molestie ut dolor ut pellentesque elit.
            </p>
            <div className="flex flex-wrap  justify-center items-center desktop:gap-4 phone:gap-3 ">
                {/* Replace these placeholder elements with your actual image components */}
                <div className="partner-card rounded-lg bg-[#8959B6] mb-4  bg-opacity-15 shadow-md w-44 h-16 p-2 flex flex-col items-center justify-center">
                    <img src={airtel} alt="Partner 1" className="object-cover mb-4" />
                </div>
                <div className="partner-card rounded-lg bg-[#8959B6] mb-4  bg-opacity-15 shadow-md w-44 h-16 p-2 flex flex-col items-center justify-center">
                    <img src={Slack} alt="Partner 2" className="object-cover mb-4" />
                </div>
                <div className="partner-card rounded-lg bg-[#8959B6] mb-4 bg-opacity-15 shadow-md w-44 h-16 p-2 flex flex-col items-center justify-center">
                    <img src={mtn} alt="Partner 3" className="object-cover mb-4" />
                </div>
                <div className="partner-card rounded-lg bg-[#8959B6] mb-4  bg-opacity-15 shadow-md w-44 h-16 p-2 flex flex-col items-center justify-center">
                    <img src={RDB} alt="Partner 4" className="object-cover mb-4" />
                </div>
                <div className="partner-card rounded-lg bg-[#8959B6] mb-4 bg-opacity-15 shadow-md w-44 h-16 p-2 flex flex-col items-center justify-center">
                    <img src={Dropbox} alt="Partner 5" className="object-cover mb-4" />
                </div>
                <div className="partner-card rounded-lg bg-[#8959B6] mb-4  bg-opacity-15 shadow-md w-44 h-16 p-2 flex flex-col items-center justify-center">
                    <img src={Trello} alt="Partner 6" className="object-cover mb-4" />
                </div>
                <div className="partner-card rounded-lg bg-[#8959B6] mb-4 bg-opacity-15 shadow-md w-44 h-16 p-2 flex flex-col items-center justify-center">
                    <img src={''} className="object-cover mb-4" />
                </div>
                <div className="partner-card rounded-lg bg-[#8959B6] mb-4  bg-opacity-15 shadow-md w-44 h-16 p-2 flex flex-col items-center justify-center">
                    <img src={''} className="object-cover mb-4" />
                </div>
                <div className="partner-card rounded-lg bg-[#8959B6] mb-4  bg-opacity-15 shadow-md w-44 h-16 p-2 flex flex-col items-center justify-center">
                    <img src={''} className="object-cover mb-4" />
                </div>
                <div className="partner-card rounded-lg bg-[#8959B6] mb-4 bg-opacity-15 shadow-md w-44 h-16 p-2 flex flex-col items-center justify-center">
                    <img src={''} className="object-cover mb-4" />
                </div>
                <div className="partner-card rounded-lg bg-[#8959B6] mb-4 bg-opacity-15 shadow-md w-44 h-16 p-2 flex flex-col items-center justify-center">
                    <img src={''} className="object-cover mb-4" />
                </div>
            </div>
            <div className='text-center'>
                <button className="mt-8 inline-flex justify-center items-center px-4 py-2 text-[#FF3230] hover:text-white rounded-md hover:bg-[#FF3230] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 border border-[#FF3230]">
                    Read more
                    <svg
                        className="w-4 h-4 ml-2 hover:text-white"
                        fill="none"
                        stroke="#FF3230"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

        </section>
    );
};

export default Partnership;
