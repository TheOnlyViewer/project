import React from 'react'
import Header from './HeaderAndFooter/Header';
import Footer from './HeaderAndFooter/Footer';
import Main from './Main/Main';
import More from './More/More';
import Info from './Info/Info';
import { Routes, Route } from 'react-router-dom';

export default function EverythingIsDisplayedHere() {
  return (
    <div>
        <Header/>
      
        <Routes>
          <Route path = "/" element={<Main/>} />
          <Route path = "/more" element={<More/>} />
          <Route path = "/info" element={<Info/>} />
        </Routes>

        <Footer/>
    </div>
  )
}
