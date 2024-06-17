import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Movies from './components/Movies.1';
import Watchlist from './components/Watchlist';
import backgroundVideo from './videos/Bv1.mp4';

function App() {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video autoPlay muted loop className="w-full h-full object-cover aspect-w-16 aspect-h-9">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative z-10 max-w-screen-xl mx-auto">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner />
                  <Movies />
                  
                </>
              }
            />
            <Route
            path="/Watchlist"
            element={
            <Watchlist />
            }
            />
          </Routes>
        </BrowserRouter>
        
      </div>
    </div>
  );
}

export default App;




