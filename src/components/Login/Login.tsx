import Logo from '../../assets/img/Logo.svg'
import { Link } from 'react-router-dom'
import LoginImage from '../../assets/img/Login.jpg'
const Login = () => {
    return (
        <div className=' '>
            <div className="flex phone:mt-20 desktop:mt-40 w-full max-w-md mx-auto overflow-hidden bg-[#FFF5F5] rounded-lg shadow-lg  desktop:max-w-6xl">
                <div
                    className="hidden bg-cover desktop:block desktop:w-1/2"
                    style={{
                        backgroundImage: `url('${LoginImage}')`,
                    }}
                ></div>

                <div className="w-full px-6 py-8 md:px-8 desktop:w-1/2">
                    <div className="flex justify-center mx-auto">
                        <Link to="/">
                            <img className="w-auto h-7 phone:h-8" src={Logo} alt="" />
                        </Link>
                    </div>

                    <p className="mt-3 text-2xl text-center text-gray-900 ">
                        Welcome back!
                    </p>

                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b desktop:w-1/4"></span>

                        <p className="text-md text-center text-gray-900 uppercase "> login</p>
                        <span className="w-1/5 border-b  desktop:w-1/4"></span>
                    </div>

                    <div className="mt-4">
                        <label className="block mb-2 text-md font-medium text-gray-600 ">Email Address</label>
                        <input id="LoggingEmailAddress" className="block w-full px-4 py-2 text-gray-900 bg-white border rounded-lg  focus:border-gray-900 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-gray-900" type="email" />
                    </div>

                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label className="block mb-2 text-md font-medium text-gray-600 ">Password</label>
                            <a href="#" className="text-md text-gray-500  hover:underline">Forget Password?</a>
                        </div>

                        <input id="loggingPassword" className="block w-full px-4 py-2 text-gray-900 bg-white border rounded-lg    focus:border-gray-900 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-gray-900" type="password" />
                    </div>

                    <div className="mt-6">
                        <button className="w-full px-6 py-3 text-md font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#FF3230] rounded-lg hover:bg-[#FF3230] focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                            Sign In
                        </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b  md:w-1/4"></span>

                        <Link to="/Signup" className="text-md text-gray-900 uppercase  hover:underline">or sign up</Link>

                        <span className="w-1/5 border-b  md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login