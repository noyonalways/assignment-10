import React, { useState } from 'react';
import auth from '../../firebase/Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Checkout = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState({value: '', error: ''});
    const [address, setAddress] = useState({value: '', error: ''});
    const [phone, setPhone] = useState({value: '', error: ''});

    const navigate = useNavigate();

    

    const handleName = nameInput =>{
        if(nameInput){
            setName({value: nameInput, error: ''})
        }else{
            setName({value: '', error: 'Please input your name'})
        }
    };

    const handleAddress = addressInput =>{
        if(addressInput){
            setAddress({value: addressInput, error: ''})
        }else{
            setAddress({value: '', error: "Please input your Address"})

        }
    };


    const handlePhone = phoneInput =>{
        if(phoneInput){
            setPhone({value: phoneInput, error: ''})
        }else{
            setPhone({value: '', error: "Please input Phone number"})

        }
    };


    const handleCheckout = event =>{
        event.preventDefault();

        if(name.value === ''){
            setName({value: '', error: "Name is required"})
        }
        if(address.value === ''){
            setAddress({value: '', error: "Address is required"})
        }
        if(name.value === ''){
            setPhone({value: '', error: "Phone number is required"})
        }

        if(name.value && address.value && phone.value){
            navigate('/');
            toast.success("Your package is booked", {
                position: toast.POSITION.TOP_CENTER,
                toastId: 8
            });
        }
    }

    

    return (
        <div>
            <div className="form-bg mx-auto w-full px-5 sm:px-12  md:px-0 md:w-5/6 flex items-center justify-center h-screen">
                <div data-aos="fade-up" 
        data-aos-duration="1500" className=" py-5 px-4 w-full md:w-[60%] lg:w-[420px] hover:shadow-lg duration-300 shadow rounded bg-white">
                    <h3 className=" lg:text-3xl text-2xl text-center mb-3">Checkout information</h3>
                    <form onSubmit={handleCheckout} className='space-y-3'>
                        <input onBlur={(e)=> handleName(e.target.value)} className='border bg-gray-50 focus:bg-gray-100 duration-200 focus:tracking-wider p-[10px] rounded block w-full outline-none ' placeholder='Name' type="text" />
                        {
                            name?.error && <small className='text-red-400'>{name.error}</small>
                        }
                        
                        <input value={user?.email} className='border bg-gray-50 focus:bg-gray-100 duration-200 focus:tracking-wider p-[10px] rounded block w-full outline-none ' placeholder='Email'  readOnly type="email" />

                        <input onBlur={(e) => handleAddress(e.target.value)} className='border bg-gray-50 focus:bg-gray-100 duration-200 focus:tracking-wider p-[10px] rounded block w-full outline-none ' placeholder='Address' type="text" />
                        {
                            address?.error && <small className='text-red-400'>{address.error}</small>
                        }

                        <input onBlur={(e) => handlePhone(e.target.value)} className='border bg-gray-50 focus:bg-gray-100 duration-200 focus:tracking-wider p-[10px] rounded block w-full outline-none ' placeholder='Phone' type="number" />
                        {
                            phone?.error && <small className='text-red-400'>{phone.error}</small>
                        }

                        <button type='submit'  className="block w-full text-white bg-[#274035] border-0 py-2 px-6 focus:outline-none hover:bg-[#1f332a] rounded">Checkout</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;