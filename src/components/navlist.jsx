import React from 'react'

function Navlist() {
    const nav = ["Jewelry", "Campaigns", "Press", "Search", "Cart"]

  return (
    <div className='gap-4'>
          {nav.map((val) => (
                  
              <a className='text-black p-2  md:p-4 hover:cursor-pointer text-white'>
              {val}
              </a>
          )
      )}
    </div>
  )
}

export default Navlist
