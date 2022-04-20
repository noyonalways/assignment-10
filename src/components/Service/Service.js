import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {name, img, about, price} = service;

    return (
        <div data-aos="fade-up" 
        data-aos-duration="1500" className='duration-300 service relative overflow-hidden rounded cursor-pointer'>
            <div className='service-img '>
                <img className='w-full duration-300' src={img} alt="" />
            </div>
            <h3 className="service-title opacity-90 text-2xl md:text-3xl">{name}</h3>
            <div className="duration-300 opacity-0 p-3 flex flex-col items-center justify-center service-detail absolute left-0 top-60 bg-[#0000004d] h-full  text-white w-full">
                <p className='text-center '>{about.length > 100 ? about?.slice(0, 100) : about}</p>
                <h3 className="text-xl">${price}</h3>
                <Link to='/checkout' className="inline-flex text-white bg-[#274035] border-0 py-2 px-6 focus:outline-none hover:bg-[#1f332a] rounded">Get service</Link>
            </div>
        </div>
    );
};

export default Service;