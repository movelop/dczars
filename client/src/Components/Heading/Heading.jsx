import React from 'react';

import { Navbar } from '../';
import { HeadingSearch } from '..'
import './Heading.css';

const Heading = ({ img }) => {
  

  return (
    <div className="heading"
      style={{
        background: ` no-repeat center/cover url(${img}) `,
      }}
    >
        <div className="headingOverlay">
            <Navbar />
            <div className="headingContainer">
              <div className="headingTexts">
                <h6>WELCOME TO</h6>
                <h2>D'CZARS</h2>
                <h4>HOTEL & SUITES</h4>
                <p>Book your stay and enjoy Luxury
                  redefined at the most affordable rates.
                </p>
              </div>
            </div>
        </div>
        <div className="headerSearch">
          <HeadingSearch />
        </div>
    </div>
  )
}

export default Heading