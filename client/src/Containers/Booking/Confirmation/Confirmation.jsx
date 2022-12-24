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
                <div className="foundLogo">
                  <div className="logoImage">
                    <img src={images.logo} alt="logo" />
                  </div>
                  <h6>D'CZARS HOTEL AND SUITES</h6>
                </div>
                <h1>Your confirmation code is:</h1>
                <h1>{confirmation.confirmation}</h1>
                <div className='confirmDetail'>
                  <h3>Room:</h3>
                  <h3>{confirmation.roomNumbers.length >1 ? confirmation.roomNumbers.map((roomNumber) => `${roomNumber}, `): confirmation.roomNumbers.map((roomNumber) => `${roomNumber}`)}</h3>
                </div>
                <div className='confirmDetail'>
                  <h3>Name:</h3>
                  <h3>
                    {`${confirmation.lastname} ${confirmation.firstname}`}
                  </h3>
                </div>
                <div className='confirmDetail'>
                  <h3>Email:</h3>
                  <h3>{confirmation.email}</h3>
                </div>
                <div className="confirmDetail">
                  <h3>Payment Reference</h3>
                  <h3>{confirmation.paymentReference ? confirmation.paymentReference : 'Cash'}</h3>
                </div>
                <div className='confirmDetail'>
                  <h3>Phone:</h3>
                  <h3>{confirmation.phone}</h3>
                </div>
                <div className='confirmDetail'>
                  <h3>ID Number:</h3>
                  <h3>{confirmation.identity}</h3>
                </div>
                <div className='confirmDetail'>
                  <h3>Check-in Date:</h3>
                  <h3>
                    {new Date(confirmation.startDate).toLocaleString("en-uk", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </h3>
                </div>
                <div className='confirmDetail'>
                  <h3>Check-out Date:</h3>
                  <h3>
                    {new Date(confirmation.endDate).toLocaleString("en-uk", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </h3>
                </div>
                <div className="alert">
                  ⚠ Damage to any hotel's property will be charged to the occupant of the room.
                </div> 
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