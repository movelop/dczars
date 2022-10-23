import React from 'react';
import { BsPrinterFill } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';

import './Confirmation.css';
import { Footer, HeadingSmall, Testimonials } from '../../../Components';
import { images } from '../../../Data/dummy';

const Confirmation = () => {
  const location = useLocation();
  const { confirmation } = location.state;

  return (
    <div>
      <HeadingSmall text='Enjoy Your Stay!' img={images.confirm} />
      <div className="confirmation">
        <div className="confirmationContainer">
          {confirmation ? (
            <>
              <h1>Thank You!</h1>
              <div className="confirm">
                <h1>Your confirmation code is:</h1>
                <h1>{confirmation.confirmation}</h1>
                <div className="confirmButton">
                  <button className="cButton" onClick={() => window.print()}>
                    <BsPrinterFill /> Print
                  </button>
                </div>
              </div>
            </>
            ) : (
              <h1>Something went wrong...</h1>
          )}
        </div>
      </div>
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Confirmation