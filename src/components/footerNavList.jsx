// import React from 'react'

function FooterNavList() {
  const navList = ["About", "Values", "Contact", "Policies", "Stock List", "Instagram"]

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

export default FooterNavList