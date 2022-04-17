import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {name, img, about, price} = service;

    return (
        <div className='duration-300 bg-orange-200 service relative overflow-hidden rounded cursor-pointer'>
            <div className='service-img'>
                <img src={img} alt="" />
            </div>
            <h3 className="service-title opacity-90">{name}</h3>
            <div className="duration-300 opacity-0 p-3 flex flex-col items-center justify-center service-detail absolute left-0 top-60 bg-[#0000004d] h-full  text-white">
                <p className='text-center '>{about.slice(0, 60)}</p>
                <h3 className="text-lg">${price}</h3>
                <button className="inline-flex text-white bg-[#274035] border-0 py-2 px-6 focus:outline-none hover:bg-[#1f332a] rounded">Get service</button>
            </div>
        </div>
    );
};

export default Service;