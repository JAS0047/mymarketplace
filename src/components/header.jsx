import React, { useState } from 'react'
import Navlist from './navlist'
const Header = () => {
    const [data, setData]=useState()
  return (
    <div className='p-6 gap-6 grid grid-cols-1 place-items-center'>
   {/* logo */}
      <h1 className="text-2xl font-semibold"> 
      Logo Here
      </h1>
      {/* navlist */}
      <div ><Navlist/></div>
      
      </div>
  )
}

export default  Header
