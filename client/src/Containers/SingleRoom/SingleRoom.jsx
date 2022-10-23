import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { TbCurrencyNaira } from 'react-icons/tb';


import { Footer, HeadingSmall, Testimonials } from '../../Components';
import './SingleRoom.css';

const SingleRoom = () => {
  const location = useLocation();
  const { data } = location.state;
  const navigate = useNavigate();

  return (
    <div>
	    <HeadingSmall text={data?.title} img={data?.images[0]} type ='room' />
      <div className="singleRoom">
        <div className="singleRoomContainer">
          <button className="bookNow" onClick={() => navigate('/booking')}>Reserve or Book Now!</button>
          <h1 className="singleRoomTitle">{data.title}</h1>
          <p className="singleRoomHighlight">
              Book a stay over <span><TbCurrencyNaira className='currency' /></span> {data.price} at this property and get access to
              free WIFI
		  </p>
          <div className="singleRoomImages">
            {data.images?.map((photo, i) => (
              <div className="singleRoomImgWrapper" key={i}>
                <img
                  src={photo}
                  alt=""
                  className="singleRoomImg"
                />
              </div>
            ))}
          </div>
          <div className="singleRoomDetails">
            <div className="singleRoomDetailsTexts">
              <h1 className="singleRoomTitle">{data.title}</h1>
              <p className="singleRoomDesc">{data.desc}</p>
            </div>
            <div className="singleRoomDetailsPrice">
               <h1>Perfect for the night stay!</h1>
                <span>
                  This is a completely renovated and soundproofed room, 
                  all exterior with furnished balcony.
                </span>
                <h2>
                  <b><span><TbCurrencyNaira className='currency' /></span>{data.price}</b> per Night
                </h2>
                <Link to='/booking'>
                  <button >Reserve or Book Now!</button>
                </Link>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
        <Footer />
  </div>
  )
}

export default SingleRoom