import React from 'react';
import Featured from '../../components/Featured/Featured';
import Services from '../../components/Services/Services';
import Slider from '../../components/Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services/>
            <Featured/>
        </div>
    );
};

export default Home;