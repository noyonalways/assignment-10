import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font bg-white">
            <div className="mx-auto w-[94%] md:w-5/6 py-5">    
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="space-y-3 p-2">
                        <h2 className="text-xl font-medium text-gray-900 tracking-widest mb-3">Quick Links
                        </h2>
                        <nav className="list-none mb-10 space-y-2">
                            <li>
                                <Link to='/' className="text-gray-600 hover:text-gray-800">Home</Link>
                            </li>
                            <li>
                                <Link to='/blogs' className="text-gray-600 hover:text-gray-800">Blogs</Link>
                            </li>
                            <li>
                                <Link to='/about' className="text-gray-600 hover:text-gray-800">About</Link>
                            </li>
                            
                        </nav>
                    </div>
                    <div className="space-y-3 p-2">
                    <h2 className="text-xl font-medium text-gray-900 tracking-widest mb-3">Categories
                        </h2>
                        <nav className="list-none mb-10 space-y-2">
                            <li>
                                <Link  to='/' className="text-gray-600 hover:text-gray-800" rel="noopener noreferrer">Wedding Photograpy</Link>
                            </li>
                            <li>
                                <Link  to='/' className="text-gray-600 hover:text-gray-800" rel="noopener noreferrer">Events</Link>
                            </li>
                            <li>
                                <Link  to='/' className="text-gray-600 hover:text-gray-800" rel="noopener noreferrer">Anniversay</Link>
                            </li>
                            <li>
                                <Link  to='/' className="text-gray-600 hover:text-gray-800" rel="noopener noreferrer">Birthday party</Link>
                            </li>
                            
                        </nav>
                    </div>
                    <div className="space-y-3 p-2">
                    <h2 className="text-xl font-medium text-gray-900 tracking-widest mb-3">Others
                        </h2>
                        <nav className="list-none mb-10 space-y-2">
                            <li>
                                <Link  to='/' className="text-gray-600 hover:text-gray-800" rel="noopener noreferrer">First Link</Link>
                            </li>
                            <li>
                                <Link  to='/' className="text-gray-600 hover:text-gray-800" rel="noopener noreferrer">Second Link</Link>
                            </li>
                            <li>
                                <Link  to='/' className="text-gray-600 hover:text-gray-800" rel="noopener noreferrer">Third Link</Link>
                            </li>
                            
                        </nav>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-200">
                <div className="w-5/6 py-8 flex flex-wrap mx-auto items-center">
                <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
                    <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
                    <label htmlFor="footer-field" className="leading-7 text-sm text-gray-600">Newsletter</label>
                    <input placeholder='Email Address' type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <button className="inline-flex text-white bg-[#274035] border-0 py-2 px-6 focus:outline-none hover:bg-[#1f332a] rounded">Subscribe</button>
                    <p className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">Get new update to subscribe
                    <br className="lg:block hidden" />your favourite one    
                    </p>
                </div>
                <span className="inline-flex space-x-2 lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto ">
                    <a className='hover:text-[#274035]' rel="noopener noreferrer" target='_blank' href='https://www.facebook.com/codernoyon'>
                        <FaFacebook className='text-2xl'/>
                    </a>
                    <a className='hover:text-[#274035]' rel="noopener noreferrer" target='_blank' href='https://www.twitter.com/codernoyon'>
                        <FaTwitter className='text-2xl'/>
                    </a>
                    <a className='hover:text-[#274035]' rel="noopener noreferrer" target='_blank' href='https://www.instagram.com/codernoyon'>
                        <FaInstagram className='text-2xl'/>
                    </a>
                    <a className='hover:text-[#274035]' rel="noopener noreferrer" target='_blank' href='https://www.linkedin.com/in/codernoyon'>
                        <FaLinkedinIn className='text-2xl'/>
                    </a>
                    
                </span>
                </div>
            </div>
            <div className="bg-gray-100">
                <div className="w-5/6 mx-auto py-4 flex flex-wrap flex-col sm:flex-row">
                <p className="text-gray-500 text-sm text-center sm:text-left">© 2022 Picman —
                    <a href="https://coder-noyon.blogspot.com" className="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">@codernoyon</a>
                </p>
                <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">Programming Hero Learner</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;