import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import { testimonials } from '../../Data/dummy';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="testimonials">
      <div className="testimonialsContainer">
        <h1>Testimonials</h1>
        <div className='testimonialsText'>
          <h5>{`"${testimonials[currentIndex].testimony}"`}</h5>
          <p>{testimonials[currentIndex].name}</p>
        </div>
        <div className="testimonialsButtons">
          <button onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
            <IoIosArrowBack />
          </button>
          <button onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Testimonials