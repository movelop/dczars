import React from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonialsContainer">
        <h1>Testimonials</h1>
        <div className='testimonialsText'>
          <h5>"Calm, Serene, Retro – What a way to relax and enjoy"</h5>
          <p> Mr. and Mrs. Baxter, UK</p>
        </div>
        <div className="testimonialsButtons">
          <button>
            <IoIosArrowBack />
          </button>
          <button>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Testimonials