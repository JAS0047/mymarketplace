// import React from 'react'

function HeaderNavList() {
  const navList = ["Jewelry", "Campaigns", "Press", "Search", "Cart"]

  return (
    <div className='gap-4'>
      {navList.map((val) => (

        <a className='text-black p-2  md:p-4 hover:cursor-pointer '>
          {val}
        </a>
      )
      )}
    </div>
  )
}

export default HeaderNavList