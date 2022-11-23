import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillMail } from 'react-icons/ai';
import { BsPhoneFill } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { GiRotaryPhone } from 'react-icons/gi';


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
                        <p><GiRotaryPhone/> Front Desk</p>
                        <span >+234 803 988 6484</span>
                        <span>+234 816 749 5769</span>
                        <span>+234 814 026 6486</span>
                    </div>
                    <div className='contact'>
                        <p><BsPhoneFill/> Director</p>
                        <span>+234 805 789 1111</span>
                        <span>+234 803 318 6481</span>
                        <span> <AiFillMail/> kasimjs@yahoo.co.uk</span>
                    </div>
                    <p className='addressPlaceInfo'> <AiFillMail/> dczarshotel@yahoo.com</p>
                </div>
            </div>
            <ul className="flinks">
                <Link to='/facilities'>
                    <li>Facilities</li>
                </Link>
                <Link to='/contact'>
                    <li>Contact us</li>
                </Link>
                <Link to='/rooms'>
                    <li>Rooms</li>
                </Link>
                
            </ul>
            <div className="slinks">
                <a href="https://web.facebook.com/profile.php?id=100072629864480" target='_blank' rel='noreferrer' className='social'>
                    <FaFacebookF />
                    Facebook
                </a>
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