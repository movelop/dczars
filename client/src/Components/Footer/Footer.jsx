import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AiFillMail } from 'react-icons/ai';
import { BsTwitter, BsInstagram, BsPhoneFill } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';


import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerContainer">
            <div className="address">
                <div className="addressHotel">
                    <h1>D'CZARS</h1>
                    <p>HOTEL & SUITES</p>
                </div>
                <div className="addressPlace">
                    <p className='addressPlaceInfo'><HiLocationMarker className='svg'/> D'Czars Bus Stop, Ilo Awela Road, Toll Gate, Ota, Ogun State.</p>
                    <div className='contact'>
                        <p><BsPhoneFill/> Front Desk</p>
                        <span >+234 803 988 6484</span>
                    </div>
                    <div className='contact'>
                        <p><BsPhoneFill/> Director</p>
                        <span>+234 805 789 1111</span>
                        <span>+234 803 318 6481</span>
                    </div>
                    <p className='addressPlaceInfo'> <AiFillMail/> dczarshotel@yahoo.com</p>
                </div>
            </div>
            <ul className="flinks">
                <Link to='/'>
                    <li>About us</li>
                </Link>
                <Link to='/contact'>
                    <li>Contact us</li>
                </Link>
                <Link to='/'>
                    <li>Terms&conditions</li>
                </Link>
                
            </ul>
            <div className="slinks">
                <NavLink to="/" className='social'>
                    <FaFacebookF />
                    Facebook
                </NavLink>
                <NavLink to="/" className='social'>
                    <BsTwitter />
                    Twitter
                </NavLink>
                <NavLink to="/" className='social'>
                    <BsInstagram />
                    Instagram
                </NavLink>
            </div>
            <div className="newsletter">
                <p>Subscribe to our newsletter</p>
                <div className="newsletterInput">
                    <input type="email" placeholder='Email address' />
                    <button type="submit" className="btn">OK</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;