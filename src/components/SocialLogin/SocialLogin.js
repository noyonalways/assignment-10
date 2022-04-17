import React from 'react';
import './SocialLogin.css';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div className='mt-2'>
            <p className="or-title">or</p>
            <div className='flex justify-between'>
                <button className='duration-200 rounded text-[#274035] hover:bg-[#274035] hover:text-white px-9 py-2 border flex items-center space-x-2 text-lg'>
                    <FaGoogle className='text-2xl'/>
                    <span>Google</span>
                </button>
                <button className='duration-200 rounded text-[#274035] hover:bg-[#274035] hover:text-white px-9 py-2 border flex items-center space-x-2 text-lg'>
                    <FaFacebook className='text-2xl'/>
                    <span>Facebook</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;