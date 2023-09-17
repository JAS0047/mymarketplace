import React from 'react'

function Jewelry() {
  return (
      <div className='grid grid-cols-1 gap-4 place-items-center'>
          {/* first four items */}
          <div className='grid grid-cols-2 gap-4 lg:grid-cols-4'>
              {/* item1 */}
              <a>
            <div className='w-40 h-40 md:w-60 md:h-60 bg-red-500'></div>
              </a>
              {/* item2 */}
              <a>
            <div className='w-40 h-40 md:w-60 md:h-60 bg-red-500'></div> 
              </a>

              {/* item3 */}
              <a>
            <div className='w-40 h-40 md:w-60 md:h-60 bg-red-500'></div>
            </a>
         {/* items 3 */}
        <a>
            <div className='w-40 h-40 md:w-60 md:h-60 bg-red-500'></div>
        </a>
      </div>
      

      {/* last four items */}
      <div className='grid grid-cols-2 gap-4 lg:grid-cols-4'>
        {/* item 5 */}
        <a>
            <div className='w-40 h-40 md:w-60 md:h-60 bg-red-500'></div>
        </a>

        {/* item 6 */}
        <a>
            <div className='w-40 h-40 md:w-60 md:h-60 bg-red-500'></div>
        </a>

        {/* items 7 */}
        <a>
            <div className='w-40 h-40 md:w-60 md:h-60 bg-red-500'></div>
        </a>

        {/* items 8 */}
        <a>
        <div className='w-40 h-40 md:w-60 md:h-60 bg-red-500'></div>
        </a>
        
          </div>
      </div>
  )
}

export default Jewelry