import React from 'react';
import './Home.css';

import Main from '../Main/Main';
import Slider from '../Slider/Slider';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className='bg'>
            <Main/>
            <div className='container mt-2'>
                <h2 className='text-white mt-2'>Dogs Make Life Better</h2>
                <p className='text-white mt-2'>The key to a happy life is having a dog.</p>
                <Slider/>
                <Footer />
            </div>
            
        </div>


    );
};

export default Home;