import React, {useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase/Firebase.init';
import { toast } from 'react-toastify';
import Spinner from '../../components/Spinner/Spinner';

const SignIn = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState({value: "", error: ""});
    const [password, setPassword] = useState({value: "", error: ""});
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    const handleEmail = emailInput =>{
        const checkValidEmail = /\S+@\S+\.\S+/;
        if(checkValidEmail.test(emailInput)){
            setEmail({value : emailInput, error:''})
        }else{
            setEmail({value : '', error:'Invalid email'})
        }
    }

    const handlePassword = passwordInput =>{
        if(passwordInput){
            setPassword({value: passwordInput, error: ""})
        }else{
            setPassword({value: '', error: "Password is required"})

        }
    }

    if(user){
        navigate('/');
        toast.success("Welcome back", {
            position: toast.POSITION.TOP_CENTER,
            toastId: 1
        });
    }

    if(loading){
        return <Spinner/>
    }

    if(error?.message){
        if(error.message.includes('auth/user-not-found')){
            toast.error("User not found", {
                position: toast.POSITION.TOP_CENTER,
                toastId: 2
            });
        }else{
            toast.error(error.message, {
                position: toast.POSITION.TOP_CENTER,
                toastId: 2
            });
        }
        
    }

    const handleSubmit = event =>{
        event.preventDefault();

        if(email.value === ''){
            setEmail({value: '', error: "Email is required"})
        }

        if(password.value === ''){
            setPassword({value: '', error: "Password is required"})
        }

        if(email.value && password.value){
            signInWithEmailAndPassword(email.value, password.value);
        }
    }



    return (
        <div >
            <div className=" form-bg mx-auto w-full px-5 sm:px-12  md:px-0 md:w-5/6 flex items-center justify-center h-screen">
                <div className=" py-5 px-4 w-full md:w-[60%] lg:w-[420px] hover:shadow-lg duration-300 shadow rounded bg-white">
                    <h3 className="lg:text-3xl text-2xl text-center mb-3">Sign In</h3>
                    <form onSubmit={handleSubmit} className='space-y-3'>
                        <input onBlur={(e) => handleEmail(e.target.value)} className='border bg-gray-50 focus:bg-gray-100 duration-200 focus:tracking-wider p-[10px] rounded block w-full outline-none ' placeholder='Email' type="email" />
                        {
                            email?.error && <small className='text-red-400'>{email.error}</small>
                        }

                        <input onBlur={(e) => handlePassword(e.target.value)} className='border bg-gray-50 focus:bg-gray-100 duration-200 focus:tracking-wider p-[10px] rounded block w-full outline-none ' placeholder='Password' type="password" />
                        {
                            password?.error && <small className='text-red-400'>{password.error}</small>
                        }

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