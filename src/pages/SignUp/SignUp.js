import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const SignUp = () => {
    return (
        <div className=''>
            <div className="mx-auto w-5/6 flex items-center justify-center h-screen">
                <div className=" py-5 px-4 w-[96%] md:w-3/6 lg:w-[420px] hover:shadow-lg duration-300 shadow rounded ">
                    <h3 className="lg:text-3xl text-2xl text-center mb-3">Sign Up</h3>
                    <form className='space-y-3'>
                        <input className='bg-gray-50 focus:bg-gray-100 duration-200 focus:tracking-wider p-[10px] rounded block w-full outline-none ' placeholder='Name' type="text" />
                        <input className='bg-gray-50 focus:bg-gray-100 duration-200 focus:tracking-wider p-[10px] rounded block w-full outline-none ' placeholder='Email' type="email" />
                        <input className='bg-gray-50 focus:bg-gray-100 duration-200 focus:tracking-wider p-[10px] rounded block w-full outline-none ' placeholder='Password' type="password" />
                        
                        <input className='bg-gray-50 focus:bg-gray-100 duration-200 focus:tracking-wider p-[10px] rounded block w-full outline-none ' placeholder='Confirm Password' type="password" />
                        <div className='flex space-x-2 items-center'>
                            <input type="checkbox" name="terms" id="terms" />
                            <label htmlFor="terms">Term and conditions</label>
                        </div>
                        <input className='btn block w-full' type="submit" value="Sign Up" />
                        <small className='block text-center'>
                            Already have an account? 
                            <Link className='text-[#274035] font-semibold' to='/signin'>Sign In</Link>
                        </small>
                        
                    </form>
                    
                    <SocialLogin/>
                </div>
            </div>
        </div>
    );
};

export default SignUp; 