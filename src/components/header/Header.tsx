import { FaFacebookF } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Header = (): JSX.Element => {
    return (
        <div className="header border-b-2">
            <div className="w-full bg-primaryColor flex items-center justify-between p-2 text-white">
                <div className="flex gap-4">
                    <div className="date">
                        Saturday, June 22, 2014
                    </div>
                    <div className="s border-l-2 border-l-white " />
                    <a href="#">
                        Home
                    </a>
                    <div className="s border-l-2 border-l-white " />
                    <a href="#">
                        Login
                    </a>
                    <div className="s border-l-2 border-l-white " />
                    <a href="#">
                        Register
                    </a>
                    <div className="s border-l-2 border-l-white " />
                    <a href="#">
                        About
                    </a>
                </div>
                <div className="icons-container">
                    <div><FaFacebookF className="text-white" /></div>
                </div>
            </div>
            <nav className="navbar p-4 flex items-center justify-between">
                <div className="font-bold text-[2rem]">
                    <span className="t text-[#4e4e4e]">NEWS</span>&nbsp;<span className="text-primaryColor">PORTAL</span>
                </div>
                <div className="flex">
                    <div className="search-bar flex items-center justify-center bg-gray-100 border-primaryColor border-[2px] p-[5px] rounded-sm">
                        <input className="o outline-none bg-transparent w-[200px] text-[15px] px-[5px]" />
                    </div>
                    <button className="flex items-center text-white bg-primaryColor ml-2 px-[10px] gap-2 rounded-sm">
                        Search
                        <FaSearch className="" />
                    </button>
                </div>

            </nav>
        </div>
    )
};

export default Header;