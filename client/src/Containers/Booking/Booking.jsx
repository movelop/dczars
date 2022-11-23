import React, { useEffect, useState, } from 'react';
import { useNavigate } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';
import { Availability, Footer, HeadingSearch, HeadingSmall, Loading, Testimonials } from '../../Components';
import { images } from '../../Data/dummy';
import './Booking.css';
import axios from '../../hooks/api';

const Booking = () => {
  const [formData, setFormData] = useState({
    confirmation: '',
    email: '',
  });
  const [error, setError] = useState('');
  const { data, loading } = useFetch('/api/rooms');
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "D'CZARS HOTEL & SUITES||BOOKING";
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.confirmation === "" && formData.email === "") {
      return setError("Please fill out ONE of these fields.");
    }
    if (formData.confirmation.length > 0 && formData.email.length > 0) {
      return setError("Only Fill out ONE of these fields.");
    }
    try {
      const res = await axios.post('/api/bookings', formData);
      navigate('/booking/existing', { state: { data: res.data }});
    } catch (error) {
      navigate('/booking/existing', { state: { error: error.response.data }});
    }
  };

  return (
    <div>
      <HeadingSmall text='Make A Reservation' img={images.lobby} />
      <div className="booking">
        <div className="checkReservation">
          <h1>Already have a Booking?</h1>
          <form className='checkReservationForm'>
            <input
              maxLength="12"
              name="confirmation"
              type="text"
              placeholder="Enter Confirmation Code"
              value={formData.confirmation}
              onChange={handleChange}
            />
            <input
              name="email"
              type="text"
              placeholder="Or Enter Email"
              value={formData.email}
              onChange={handleChange}
            />
            <button onClick={handleSubmit} className="bookingButton">
              Lookup
            </button>
          </form>
          <span className="disclaimer">
            * expired bookings will automatically be deleted
          </span>
          {error.length > 0 && <span style={{ color: "red" }}>{error}</span>}
        </div>
        <div className="bookingHeader">
          <h1>BOOK A ROOM</h1>
        </div>
        <div className="bookingSearch">
          <HeadingSearch />
        </div>
        <div className="availability">
          {loading ? (<Loading />) : (
            <>
              {data.map((room) => (
                <Availability room={room} key={room._id} />
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

export default Booking