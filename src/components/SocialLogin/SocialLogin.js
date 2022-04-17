import React from 'react';
import './SocialLogin.css';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import auth from '../../firebase/Firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import Spinner from '../Spinner/Spinner';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    console.log(user);

    if(user){
        navigate('/');
        toast.success("Successfully SigIn !", {
            position: toast.POSITION.TOP_CENTER,
            toastId: 1
        });
    }

    if(loading){
        return <Spinner/>
    }

    if(error?.message.includes('auth/popup-closed-by-user')){
        toast.error('You closed the popup', {
            position: toast.POSITION.TOP_CENTER,
            toastId: 3
        });
    }

    return (
        <div className='mt-2'>
            <p className="or-title">or</p>
            <div className='flex justify-between'>
                <button onClick={() => signInWithGoogle()} className='duration-200 rounded text-[#274035] hover:bg-[#274035] hover:text-white px-9 py-2 border flex items-center space-x-2 text-lg'>
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