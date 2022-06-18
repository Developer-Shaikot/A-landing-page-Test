import React, { useState } from 'react';
import logo from '../../images/images-removebg-preview.png';
import './Navbar.css'

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';




const Navbar = () => {


    document.addEventListener("DOMContentLoaded", function () {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                document.getElementById('navbar_top').classList.add('fixed-top');
                // add padding top to show content behind navbar

            } else {
                document.getElementById('navbar_top').classList.remove('fixed-top');
                // remove padding top from body
                document.body.style.paddingTop = '0';
            }
        });
    });

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);






    return (
        <div>
            <div className='bgc'>
                <nav id="navbar_top" className="navbar navbar-expand-lg navbar-light bg">
                    <div className="container-fluid">
                        <Link to="/">
                            <img style={{ width: '73.78px', marginLeft: '50%' }} src={logo} alt="" />

                        </Link>
                        <Link className="LOGOTXT" to="/"><h4>Dog</h4></Link>
                        <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">

                            <div className="navbar-nav">

                                <Link className="nv1 text-white" to="/">Home </Link>
                                <Link className="nv text-white" to="/">OVERVIEW </Link>
                                <Link className="nv text-white" to="/">WHY DOG? </Link>
                                <Link className="nv text-white" to="/">DOG FOOD </Link>
                                <Link className="nv text-white" to="/">FAQ </Link>
                                <Link className="nv6 text-white" to="/"><FontAwesomeIcon icon={faTwitter} /> </Link>
                                <Link className="nv6 text-white" to="/"> <FontAwesomeIcon icon={faTelegram} /> </Link>

                            </div>

                        </div>
                    </div>
                </nav>

            </div>
        </div>
    );
};

export default Navbar;