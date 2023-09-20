// import React, { useState } from 'react'
import HeaderNavList from './headerNavList'
const Header = () => {
  // const [data, setData]=useState()
  return (
    <div className='p-6 gap-6 grid grid-cols-1 place-items-center'>
      {/* logo */}
      <h1 className="text-2xl font-semibold">
        Logo Here
      </h1>
      {/* Header Nav List */}
      <div ><HeaderNavList /></div>

    </div>
  )
}

export default Header
