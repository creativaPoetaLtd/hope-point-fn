
import { useState } from 'react';
import Logo from "../../assets/img/Logo.svg"
import { Link } from "react-router-dom";

export const BookingForm = () => {
    return (
        <>
            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px]">
                    <Link to="/">
                        <img src={Logo} className=" w-13 h-18 mx-auto mb-6" alt="" />
                    </Link>
                    <h1 className="desktop:text-3xl tablet:text-3xl phone:text-xl mb-3 text-center">Book your available time</h1>
                    <p className="mb-8 font-light text-center">Fill in this Form</p>
                    <form action="" method="POST">
                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label
                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name="fName"
                                        id="fName"
                                        placeholder="First Name"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label

                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        name="lName"
                                        id="lName"
                                        placeholder="Last Name"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label

                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name=""
                                        id=""
                                        placeholder="Email"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label

                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        placeholder="Phone Number"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label

                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Date
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        id="date"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label

                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Time
                                    </label>
                                    <input
                                        type="time"
                                        name="time"
                                        id="time"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <button
                                className="w-[40%] hover:shadow-form rounded-md border-2  border-[#FF3230] bg-white py-3 px-8 text-center text-base font-semibold text-gray-900 outline-none hover:bg-[#FF3230] hover:text-white"
                            >
                                <Link to='/Booking'>
                                Pick time
                                </Link>
                            </button>

                            <button
                                className="w-[40%] hover:shadow-form rounded-md bg-[#FF3230] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                            >
                                Book Now
                            </button>

                        </div>
                    </form>

                </div>
            </div>
        </>
    );
};



const Booking = () => {
    const daysInMonth = 10;
    const businessHours = [
        '08:00', '08:15', '08:30', '08:45',
        '09:00', '09:15', '09:30', '09:45',
        '10:00', '10:15', '10:30', '10:45',
        '11:00', '11:15', '11:30', '11:45',
        '12:00',
        '17:00'
    ];

    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const handleDayClick = (day: any) => {
        setSelectedDay(day);
        setSelectedTime(null);
    };

    const handleBookingSubmit = (formData: any) => {
        // Handle the booking submission logic here
        console.log('Booking form submitted with data:', formData);
        // Reset the state after submission
        setSelectedDay(null);
        setSelectedTime(null);
    };

    const handleTimeClick = (time: any) => {
        setSelectedTime(time);
    };

    let currentMonth: any = null;

    return (
        <div className="container desktop:mx-32 flex items-center justify-center min-h-screen">
            <div className="text-center w-full">
                <h1 className="text-3xl mt-12 font-semibold mb-4">Book available Time</h1>
                <div className="flex tablet:mx-auto flex-wrap gap-4 overflow-y-auto">
                    {Array.from({ length: daysInMonth }, (_, index) => {
                        const date = new Date();
                        date.setDate(date.getDate() + index);
                        const formattedDate = date.toDateString();
                        const month = date.getMonth();

                        if (month !== currentMonth) {
                            currentMonth = month;
                            return (
                                <div key={`month-${month}`} className="w-full mt-4">
                                    <h2 className="text-2xl text-left font-semibold mb-2">{date.toLocaleString('en-US', { month: 'long' })}</h2>
                                </div>
                            );
                        }

                        return (
                            <div key={formattedDate} className={`w-full tablet:w-1/3 desktop:w-1/6 border p-4 ${selectedDay === formattedDate ? 'bg-blue-500 text-white' : ''}`}>
                                <div className="font-bold mb-2 p-4 border-r-8 tablet:border-r-0 tablet:border-b-8 lg:border-b-0 lg:border-r-8 bg-[#FFF5F5]">
                                    {formattedDate}
                                </div>
                                <div className="flex flex-wrap gap-2 h-40 overflow-x-auto">
                                    {businessHours.map((time) => (
                                        <button
                                            key={time}
                                            className={`px-2 py-2 rounded-lg border-2 border-[#b66f6d] ${selectedTime === time ? 'bg-[#FF3230] text-gray-100' : 'hover:bg-[#FF3230] hover:border-0 hover:text-gray-100'}`}
                                            onClick={() => handleTimeClick(time)}
                                        >
                                            <Link to="/booking-form">
                                                {time}
                                            </Link>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Booking;
