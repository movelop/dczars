import React, { useEffect } from 'react';

import { Heading, Testimonials, Footer, Header, Loading } from '../../Components';
import { images } from '../../Data/dummy';
import useFetch from '../../hooks/useFetch';
import './Facilities.css';

const desc = "We want your stay at our lush hotel to be truly unforgettable.  That is why we give special attention to all of your needs so that we can ensure an experience quite unique. D'Czars hotel & suites offer the perfect setting with stunning views for leisure and our modern luxury hotel facilities will help you enjoy the best of all.";

const Facility = ({ item }) => (
  <div className="facility"
    style={{
      background: ` no-repeat center/cover url(${item.img}) `,
    }}
  >
    <div className='overlay'/>
    <div className="facilityName">
      <h4>{item.title}</h4>
    </div>
  </div>
)

const Facilities = () => {
  const { data, loading } = useFetch('/api/facilities')
  useEffect(() => {
    document.title = "D'CZARS HOTEL AND SUITES||FACILITIES";
  }, []);
  return (
    <div>
        <Heading img = {images.facilitiesImg} />
        <Header name='FACILITIES'  desc = { desc } />
        <div className="facilities">
          <div className="facilitiesContainer">
            {loading ? (<Loading text={'Loading ...'} />) : (
              <>
                {data.map((item) => (
                  <Facility key={item._id} item={item} />
                ))}
              </>
            )}
          </div>
        </div>
        <Testimonials />
        <Footer />
    </div>
  )
}

export default Facilities