import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import './App.css';
import { Booking, Checkout, Confirmation, Contact, Existing, Facilities, Home, NoPage, Rooms, SingleRoom } from './Containers';

const App = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className='app'>
           <Routes>
               <Route path='/' element={ <Home /> }/>
               <Route path='/facilities' element={ <Facilities /> }/>
               <Route path='/rooms' element={ <Rooms /> }/>
               <Route path='/rooms/:id' element={ <SingleRoom />} />
               <Route path='/contact' element={ <Contact /> }/>
               <Route path='*' element={ <NoPage /> }/>
               <Route path='booking' element={ <Booking /> }/>
               <Route path='booking/existing' element={ <Existing /> }/>
               <Route path='booking/checkout' element={ <Checkout /> }/>
               <Route path='booking/confirmation' element={ <Confirmation /> }/>
           </Routes>
    </div>
  )
}

export default App;