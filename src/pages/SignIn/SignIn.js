import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const SignIn = () => {
    return (
        <div >
            <div className="mx-auto w-full px-5 sm:px-12  md:px-0 md:w-5/6 flex items-center justify-center h-screen">
                <div className=" py-5 px-4 w-full md:w-[60%] lg:w-[420px] hover:shadow-lg duration-300 shadow rounded ">
                    <h3 className="lg:text-3xl text-2xl text-center mb-3">Sign In</h3>
                    <form className='space-y-3'>
                        <input className='bg-gray-50 focus:bg-gray-100 duration-200 focus:tracking-wider p-[10px] rounded block w-full outline-none ' placeholder='Email' type="email" />
                        <input className='bg-gray-50 focus:bg-gray-100 duration-200 focus:tracking-wider p-[10px] rounded block w-full outline-none ' placeholder='Password' type="password" />
                        <input className='btn block w-full' type="submit" value="Sign In" />
                        <small className='block text-center'>
                            New user? 
                            <Link className='text-[#274035] font-semibold' to='/signup'>Create Account</Link>
                        </small>
                        
                        <Link className='inline-block' to=''>Forget Password</Link>
                    </form>
                    <SocialLogin></SocialLogin>

                </div>
            </div>
        </div>
    );
};

export default SignIn;