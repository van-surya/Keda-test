import { useState } from "react";
import Bars from '../assets/bars-solid.svg'
import { Link } from "react-router-dom";
import Login from "./Login";

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <header className="fixed py-2 lg:py-4 bg-glass top-0 w-full z-40">
                <div className="container px-4 mx-auto">
                    <div className="flex justify-between items-center relative">
                        <a href="/">
                            <img className="h-12" src="https://www.keda-tech.com/img/logo-kedatech.e401b8e2.png" alt="logo" />
                        </a>
                        <div className={`absolute w-full top-[100%] left-0 py-3 md:py-5 lg:relative lg:w-[unset] lg:py-0 lg:left-[unset] ${isMobileMenuOpen ? 'block' : 'hidden'} lg:block! lg:ms-auto`}>
                            <div className="bg-glass mx-auto flex flex-col lg:flex lg:flex-row gap-3 lg:gap-8 p-3 rounded-lg lg:bg-transparent! lg:shadow-none! backdrop-blur-[50px] lg:backdrop-filter-none! lg:rounded-none lg:p-0">
                                <Link className="text-xl lg:font-semibold hover:text-blue-700"
                                    onClick={() => handleScroll("hero")}
                                    to="#hero">Home</Link>
                                <Link className="text-xl lg:font-semibold hover:text-blue-700"
                                    onClick={() => handleScroll("pricing")}
                                    to="#pricing">Pricing</Link>
                                <Link className="text-xl lg:font-semibold hover:text-blue-700"
                                    onClick={() => handleScroll("contact")}
                                    to="#contact">Contact</Link>
                            </div>
                        </div>
                        <div className="w-8 h-8 cursor-pointer lg:hidden order-3" onClick={toggleMobileMenu}>
                            <img className="w-full h-full" src={Bars} alt="hamburger" />
                        </div>
                        <Login />
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header