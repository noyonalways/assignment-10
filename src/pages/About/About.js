import React from 'react';
import AboutImage from '../../assets/about/2.png';
import './About.css';

const About = () => {
    return (
        <section className='py-14'>
            <div className="mx-auto w-5/6">
                <h2 className="text-3xl text-center mb-12 section-title" data-aos="zoom-in">About Me</h2>
                <div className="flex flex-wrap justify-between items-center gap-5 md:gap-0" data-aos="fade-right">
                    <div className='order-2 md:order-1 basis-[100%] md:basis-[55%] lg:basis-[45%]'>
                        <div className='space-y-3'>
                            <p className='text-xl'>Hello, My name is</p>
                            <h2 className="text-5xl">Md Noyon Rahman</h2>
                            <span className='text-2xl'>Programming Hero Learner</span>
                            <p className='text-base'>I am a student, currently living in Gazipur, Dhaka, Bangladesh. My interests range from photography to technology. My goal is to become a passionate full-stack web developer. Next few months I want to focus on my learning habits to fulfill my dream. I will not compromise my learning and practice. I will work harder and harder. Isha Allah. </p>
                        </div>
                    </div>
                    <div className='order-1 basis-[60%] md:basis-[32%] mx-auto md:mx-0'  data-aos="zoom-in" data-aos-duration="1000">
                        <img className='w-full rounded-full' src={AboutImage} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;