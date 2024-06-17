import React from 'react'

function Watchlist() {
  return (
    <>

    <div className='flex justify-center flex-wrap m-4'>
      <div className=' flex justify-center h-[3rem] w-[9rem] bg-gray-500 rounded-xl text-slate-900 font-bold mx-4 p-2 transition-all duration-300 ease-in-out hover:bg-gray-700  cursor-pointer'>Action</div>
      <div className=' flex justify-center h-[3rem] w-[9rem] bg-gray-500 rounded-xl text-slate-900 font-bold mx-4 p-2 transition-all duration-300 ease-in-out hover:bg-gray-700  cursor-pointer'>Adventure</div>
      <div className=' flex justify-center h-[3rem] w-[9rem] bg-gray-500 rounded-xl text-slate-900 font-bold mx-4 p-2 transition-all duration-300 ease-in-out hover:bg-gray-700  cursor-pointer'>Fantasy</div>
    </div>


    <div className='flex justify-center my-4 '>
        <input type='text' placeholder='Search Movies' className='h-[3rem] w-[18rem] bg-gray outline-none px-4 rounded-lg' />
    </div>

    <div className='overflow-hidden rounded-lg border border-gray-200 m-8'>
      <table className='w-full text-white text-center text-2xl font-bold mb-3'>
        <thead className='border'>
            <tr>
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
        </thead>

        <tbody>
            
            <tr className='border-b-2'>
              <td className='flex items-center px-6 py-4'>
                <img className='h-[8rem] w-[10rem]' src={`https://tse4.mm.bing.net/th?id=OIP.Ej5nvun_6vrPdimkIUp4FgHaFj&pid=Api&P=0&h=180`} />
                <div className='mx-10'>Wolf Children</div>
              </td>

              <td>
                8
              </td>
              <td>
                8
              </td>
              <td>
                Fantasy
              </td>
              <td className='text-red-800'>Delete</td>
            </tr>

            <tr className='border-b-2'>
              <td className='flex items-center px-6 py-4'>
                <img className='h-[8rem] w-[10rem]' src={`https://preview.redd.it/just-a-list-of-anime-movies-i-would-love-to-see-get-4k-v0-5b34f8ntg2y91.jpg?width=640&crop=smart&auto=webp&s=59e196e43a5e7dff0dd4c81d5a342c6728c8576f`} />
                <div className='mx-10'>A Silent Voice</div>
              </td>

              <td>
                8.5
              </td>
              <td>
                9
              </td>
              <td>
                Romantic
              </td>
              <td className='text-red-800'>Delete</td>
            </tr>

            <tr className='border-b-2'>
              <td className='flex items-center px-6 py-4'>
                <img className='h-[8rem] w-[10rem]' src={`https://tse1.mm.bing.net/th?id=OIP.uKMHSlAuV9bHhnzv3IA9igHaKe&pid=Api&P=0&h=180`} />
                <div className='mx-10'>Colorful</div>
              </td>

              <td>
                5
              </td>
              <td>
                7
              </td>
              <td>
                Drama, Super-Natural
              </td>
              <td className='text-red-800'>Delete</td>
            </tr>

            <tr className='border-b-2'>
              <td className='flex items-center px-6 py-4'>
                <img className='h-[8rem] w-[10rem]' src={`https://tse2.mm.bing.net/th?id=OIP.SymmUVQnfRhr2iv9jF7-hAHaLM&pid=Api&P=0&h=180`} />
                <div className='mx-10'>Spirited Away</div>
              </td>

              <td>
                8
              </td>
              <td>
                7
              </td>
              <td>
                Adventure
              </td>
              <td className='text-red-800'>Delete</td>
            </tr>

            <tr className='border-b-2'>
              <td className='flex items-center px-6 py-4'>
                <img className='h-[8rem] w-[10rem]' src={`https://tse1.mm.bing.net/th?id=OIP.qvFMXi16-y4Ii4CQlZzAeAHaLH&pid=Api&P=0&h=180`} />
                <div className='mx-10'>Naruto Shippuden</div>
              </td>

              <td>
                9
              </td>
              <td>
                9
              </td>
              <td>
                Action
              </td>
              <td className='text-red-800'>Delete</td>
            </tr>

            <tr className='border-b-2'>
              <td className='flex items-center px-6 py-4'>
                <img className='h-[8rem] w-[10rem]' src={`https://www.scrolldroll.com/wp-content/uploads/2021/07/nausicaa-best-japanese-anime-movies-1365x2048.jpg`} />
                <div className='mx-10'>Nausicaa</div>
              </td>

              <td>
                7
              </td>
              <td>
                5
              </td>
              <td>
                Adventure
              </td>
              <td className='text-red-800'>Delete</td>
            </tr>


            
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Watchlist


