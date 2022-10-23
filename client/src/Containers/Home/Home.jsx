import React from 'react';
import { Link } from 'react-router-dom';

import { Footer, Heading, Testimonials } from '../../Components';
import { images } from '../../Data/dummy';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
        <Heading img = {images.homeImage} />
        <div className="complementry">
          <h2>D’Czars hotel boasts high-class services like: uninterrupted electricity, 
            an event hall, adequate car parking garage, 
            a reliable security complimented by the use of CCTV cameras, a gym and a swimming pool.
          </h2>
        </div>
        <div>
          <div className="explore">
            <div className="exploreContainer">
              <div className="exploreTextContainer">
                <div className="exploreTexts">
                  <h3>Luxury redefined</h3>
                  <p>The rooms at D’Czars Hotel are quite spacious and come with great services and 
                    facilities such as luxurious beds, wardrobe, flat-screen television sets with access to cable channels,
                    free wireless internet access, en-suite bathrooms with stand-in showers and complimentary toiletries, 
                    telephone luggage storage, tables and armchairs, refrigerators plus in-room sofas.
                  </p>
                  <Link to="/rooms">
                    <button className='exploreButton'>Explore</button>
                  </Link>
                </div>
                <div className='line' />
              </div>
              <div className="exploreImageContainer">
                <img src={images.exploreRooms} alt="exploreRooms" />
              </div>
            </div>
          </div>
          <div className="explore">
            <div className="exploreContainer">
              <div className="exploreTextContainer">
                <div className="exploreTexts">
                  <h3>Leave your worries at the gate</h3>
                  <p>The hotel features a standard sized swimming pool, a restaurant and a bar. 
                    The hotel is a 35 minutes drive from Murtala Mohammed International Airport. 
                    The restaurant serves local and continental dishes. The bar serves a variety of alcoholic and non alcoholic 
                    drinks which can be enjoyed in the lounge. Guests may also dine outdoors by the balcony overlooking the pool.
                  </p>
                  <Link to="/facilities">
                    <button className='exploreButton'>Explore</button>
                  </Link>
                </div>
                <div className='line'  />
              </div>
              <div className="exploreImageContainer">
                <img src={images.explore2} alt="exploreRooms" />
              </div>
            </div>
          </div>
        </div>
        <Testimonials />
        <Footer />
    </div>
  )
}

export default Home;