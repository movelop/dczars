import React, { useEffect } from 'react';

import { HeadingSmall, Footer } from '../../Components';
import { images } from '../../Data/dummy';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    document.title = "D'CZARS HOTEL AND SUITES||CONTACT-US";
  }, []);
  return (
    <div>
        <HeadingSmall text={'CONTACT-US'} img={images.queen}/>
        <div className="contact">
          <div className="contactContainer">
            <div className="contactTop">
              <h3>WE ARE HERE FOR YOU</h3>
              <p>At D'Czars Hotel & Suites, we take our customers seriously. Do you have any enquiries, compaints or requests, 
                please forward it to our support desk and we will get back to you as soon as possible.
              </p>
            </div>
            <div className="contactBottom">
              <div className="contactAddress">
                <h2>D'Czars Bus Stop, Ilo Awela Road, Toll Gate, Ota, Ogun State.</h2>
                <div className="contactInfo">
                  <p>Phone: 08057891111, 08039886484, 08167495769, 08140266486</p>
                  <p>Email: dczarshotel@yahoo.com</p>
                </div>
              </div>
              <div className="contactSub">
                <h2>Send us a message</h2>
                <form className="form">
                  <div className="formInput">
                    <label >Name</label>
                    <input type="text" />
                  </div>
                  <div className="formInput">
                    <label >Email Address</label>
                    <input type="email" />
                  </div>
                  <div className="formInput">
                    <label >Message</label>
                    <textarea />
                  </div>
                  <div className="contactButton">
                    <button type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Contact;