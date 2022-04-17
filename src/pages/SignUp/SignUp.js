import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase/Firebase.init';
import { toast } from 'react-toastify';

const SignUp = () => {

    const navigate = useNavigate()
    const [name, setName] = useState({value: '', error: ''});
    const [email, setEmail] = useState({value: '', error: ''});
    const [password, setPassword] = useState({value: '', error: ''});
    const [confirmPassword, setConfirmPassword] = useState({value: '', error: ''});
    const [agree, setAgree] = useState(false);

    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);


    const handleName = nameInput => {
        if(nameInput){
            setName({value: nameInput, error: ''})
        }
    }

    const handleEmail = emailInput => {
        const checkValidEmail = /\S+@\S+\.\S+/;
        if(checkValidEmail.test(emailInput)){
            setEmail({value : emailInput, error:''})
        }else{
            setEmail({value : '', error:'Invalid email'})
        }
        
    };

    const handlePassword = passwordInput => {
        if(passwordInput.length < 6){
            setPassword({value: '', error:'Password too short'})
        }else{
            setPassword({value: passwordInput, error:''})

        }  
    };


    const handleConfirmPassword = confirmPasswordInput => {
        if(confirmPasswordInput === password.value){
            setConfirmPassword({value: confirmPasswordInput, error:''})
        }else{
            setConfirmPassword({value: '', error: "Password didn't match"})
        }
    };


    if(user){
        navigate('/');
        toast.success("Successfully Signup !", {
            position: toast.POSITION.TOP_CENTER,
            toastId: 1
        });
    }

    
    if(error?.message.includes('auth/email-already-in-use')){
            toast.error('User already exists', {
                position: toast.POSITION.TOP_CENTER,
                toastId: 2
            });
    }
  

     

    const handleSubmit = event =>{
        event.preventDefault();

        if(email.value === ''){
            setEmail({value: '', error: "Email is required"})
        }
        if(password.value === ''){
            setPassword({value: '', error: "Password is required"})
        }

        if(email.value && password.value === confirmPassword.value && agree){
            createUserWithEmailAndPassword(email.value, password.value);
        }

    }

    
    return (
        <div className=''>
            <div className="mx-auto w-5/6 flex items-center justify-center h-screen">
                <div className=" py-5 px-4 w-[96%] md:w-[60%] lg:w-[420px] hover:shadow-lg duration-300 shadow rounded ">
                    <h3 className="lg:text-3xl text-2xl text-center mb-3">Sign Up</h3>
                    <form onSubmit={handleSubmit} className='space-y-3'>
                        <input onBlur={(e) => handleName(e.target.value)} className='bg-gray-50 focus:bg-gray-100 duration-200 focus:tracking-wider p-[10px] rounded block w-full outline-none ' placeholder='Name' type="text" />

                        <input onBlur={(e) => handleEmail(e.target.value)} className='bg-gray-50 focus:bg-gray-100 duration-200 focus:tracking-wider p-[10px] rounded block w-full outline-none ' placeholder='Email' type="email" />
                        {
                            email?.error && <small className='text-red-400'>{email.error}</small>
                        }

                        <input onBlur={(e) => handlePassword(e.target.value)} className='bg-gray-50 focus:bg-gray-100 duration-200 focus:tracking-wider p-[10px] rounded block w-full outline-none ' placeholder='Password' type="password" />
                        {
                            password?.error && <small className='text-red-400'>{password.error}</small>
                        }
                        
                        <input onBlur={(e) => handleConfirmPassword(e.target.value)} className='bg-gray-50 focus:bg-gray-100 duration-200 focus:tracking-wider p-[10px] rounded block w-full outline-none ' placeholder='Confirm Password' type="password" />
                        {
                            confirmPassword?.error && <small className='text-red-400'>{confirmPassword.error}</small>
                        }

                        <div className='flex space-x-2 items-center'>
                            <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                            <label className={`${!agree && 'text-red-400'}`} htmlFor="terms">Term and conditions</label>
                        </div>

                        <input className='btn block w-full cursor-pointer' type="submit" value="Sign Up" />

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