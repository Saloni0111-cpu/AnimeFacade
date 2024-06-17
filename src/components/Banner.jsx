import React from 'react'

function Banner() {
  return (
    <div>
      <div className='text-2xl m-5 font-bold text-center p-5 text-white'>Latest Movie</div>

    <div className=' rounded-3xl m-3 w-full h-[100vh] md:h-[80vh]  bg-center bg-no-repeat flex items-end'>
    <img className='cover rounded-3xl m-3 w-full h-[100vh] md:h-[80vh]  bg-center bg-no-repeat flex items-end ' src={`https://media.cinemacloud.co.uk/imageFilm/1702_1_5.jpg`} />
    </div>
</div>
  )
}

export default Banner