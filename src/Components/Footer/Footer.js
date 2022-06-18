import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../images/images-removebg-preview.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='ftrBack'>
            <div className="container row row-cols-3 row-cols-md-3">
                <div className='mt-3'>
                    <Link to="/">
                        <img style={{ width: '73.78px', height: '59.15px', marginLeft: '10%' }} src={logo} alt="" />

                    </Link>
                    <Link className="FLOGOTXT" to="/">DOG</Link>

                </div>

                <div className='text-white mt-3'>
                    <h8 ><b>Qick LInks</b></h8>
                    <br />
                    <p>Home</p>
                    <p>Why Dog?</p>
                    <p>FAQ</p>
                </div>

                <div className='text-white mt-3'>
                    <h8>Social Media</h8>
                    <br />
                    <Link className="tLWtlogo text-white" to="/"><FontAwesomeIcon icon={faTelegram} /></Link>
                    <p className='teletxt'>Telegram</p>
                    <Link className="tLWtlogo text-white" to="/"><FontAwesomeIcon icon={faTwitter} /></Link><p className='tWTetxt'>Twitter</p>

                </div>

            </div>
            <p className='container ftrTxt'>Copyright 2022 PET DOG All Rights Reserved</p>
        </div>
    );
};

export default Footer;