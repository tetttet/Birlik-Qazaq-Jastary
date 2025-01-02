import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/logo/mini-white-logo-removebg.png";
import LanguageSelector from '../Language/language-selector';

let header_background_color = "py-2";

function Navbar() {
    return (
        <div className="mt-5">
            <div className={header_background_color}>
                <div className="container mx-auto flex justify-between items-center px-4 sm:px-8 md:px-16">
                    {/* Логотип */}
                    <Link to="#">
                        <img className='w-32 sm:w-36 md:w-40' src={logo} alt="Logo" />
                    </Link>

                    {/* Языковой селектор */}
                    <div className="language-container">
                        <LanguageSelector />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
