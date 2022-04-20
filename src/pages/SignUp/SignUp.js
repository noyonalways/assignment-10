import React, {useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase/Firebase.init';
import { toast } from 'react-toastify';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import Spinner from '../../components/Spinner/Spinner';
import './SignUp.css'

const SignUp = () => {

    const navigate = useNavigate();
    const [name, setName] = useState({value: '', error: ''});
    const [email, setEmail] = useState({value: '', error: ''});
    const [password, setPassword] = useState({value: '', error: ''});
    const [confirmPassword, setConfirmPassword] = useState({value: '', error: ''});

    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const [updateProfile] = useUpdateProfile(auth);


    const handleName = nameInput => {
        if(nameInput){
            setName({value: nameInput, error: ''})
        }else{
            setName({value: '', error: 'Input a name'})
        }
    };

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
        }
        else if(!/(?=.*[A-Z])/.test(passwordInput)){
            setPassword({value: '', error:'Password must contain a capital letter'})
        }
        else{
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
        toast.success("Successfully Signup and verification mail sent", {
            position: toast.POSITION.TOP_CENTER,
            toastId: 1
        });
    };

    
    if(loading){
        return <Spinner/>
    }
    


    const handleSubmit = async  (event) =>{
        event.preventDefault();

        if(name.value === ''){
            setName({value: '', error: "Name is required"})
        }

        if(email.value === ''){
            setEmail({value: '', error: "Email is required"})
        }

        if(password.value === ''){
            setPassword({value: '', error: "Password is required"})
        }

        if(confirmPassword.value === ''){
            setConfirmPassword({value: '', error: "Password confirmation is required"})
        }

        if(email.value && password.value === confirmPassword.value){
           await createUserWithEmailAndPassword(email.value, password.value);
           await updateProfile({displayName: name.value, });
           
           
        }

    };


    
    return (
        <div>
            <div className="form-bg mx-auto w-full px-5 sm:px-12  md:px-0 md:w-5/6 flex items-center justify-center h-screen">
                <div data-aos="fade-up" 
        data-aos-duration="1500" className=" py-5 px-4 w-full md:w-[60%] lg:w-[420px] hover:shadow-lg duration-300 shadow rounded bg-white">
                    <h3 className=" lg:text-3xl text-2xl text-center mb-3">Sign Up</h3>
                    <form onSubmit={handleSubmit} className='space-y-3'>
                        <input onBlur={(e) => handleName(e.target.value)} className='border bg-gray-50 focus:bg-gray-100 duration-200 focus:tracking-wider p-[10px] rounded block w-full outline-none ' placeholder='Name' type="text" />
                        {
                            name?.error && <small className='text-red-400'>{name.error}</small>
                        }

                        <input onBlur={(e) => handleEmail(e.target.value)} className='border bg-gray-50 focus:bg-gray-100 duration-200 focus:tracking-wider p-[10px] rounded block w-full outline-none ' placeholder='Email' type="email" />
                        {
                            email?.error && <small className='text-red-400'>{email.error}</small>
                        }

                        <input onBlur={(e) => handlePassword(e.target.value)} className='border bg-gray-50 focus:bg-gray-100 duration-200 focus:tracking-wider p-[10px] rounded block w-full outline-none ' placeholder='Password' type="password" />
                        {
                            password?.error && <small className='text-red-400'>{password.error}</small>
                        }
                        
                        <input onBlur={(e) => handleConfirmPassword(e.target.value)} className='border bg-gray-50 focus:bg-gray-100 duration-200 focus:tracking-wider p-[10px] rounded block w-full outline-none ' placeholder='Confirm Password' type="password" />
                        {
                            confirmPassword?.error && <small className='text-red-400'>{confirmPassword.error}</small>
                        }

                        <input className='ring-1 ring-[#274035] btn block w-full cursor-pointer' type="submit" value="Sign Up" />

                        <small className='block text-center'>
                            Already have an account? 
                            <Link className='text-[#274035] font-semibold' to='/signin'>Sign In</Link>
                        </small>

                        {
                            error?.message && <small className='text-center block text-red-400 py-1 bg-red-50 rounded-md'>{error.message.includes('auth/email-already-in-use') ? "User already exists" : error.message}</small>
                        }

                    </form>
                    <SocialLogin/>
                </div>
            </div>
        </div>
    );
};

export default SignUp; 