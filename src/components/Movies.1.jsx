import React, { useEffect, useState } from 'react';
import Moviecard from './Moviecard';
import axios from 'axios';
import Pagination from './Pagination';

const Movies = () => {
  
  const [pageNo, setPageNo] = useState(1);
  

  const handlePrev = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  

  return (
    <div>
      <div className='text-2xl m-5 font-bold text-center p-5 text-white'>Trending Movies</div>
      <div className='flex flex-wrap justify-around'>
        
      <div className="flex overflow-x-auto p-4 space-x-4">
      <Moviecard />
    </div>
        
      </div>
      <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev} />
    </div>
  );
};

export default Movies;

