import { useState } from 'react'
import ReactDropdown from 'react-dropdown'

// The Drop Down Arrays for size
function ProductPage() {
  const size = ["L", "XL", "XXL"]
  const [inputSize, setInputSize] = useState()

  // The Drop Down Array for Quantity
  const num = ["1", "2", "3", "4", "5"]
  const [inputNum, setInputNum] = useState()

  return (
    <div className='grid grid-cols-2'>
      {/* The Images(9 & 10) for the Product Page */}
      <div>
        <img src='/src/assets/images/Image10.png' />
        <img src='/src/assets/images/Image9.png' />
      </div>

      {/* The Product Information*/}
      <div className='flex flex-cols justify-center'>
        {/* The Product Contents  */}
        <div className='w-8/12 flex flex-col justify-start text-left gap-4'>
          <p className='text-xs text-gray-400'>Jewelry / Earnings</p>
          <h1 className='font-semibold text-xl text-gray-500'>Kaila Dress Es</h1>
          <h1 className='text-sm text-gray-500'>COLLECTION FW 20</h1>
          <h1 className='text-sm text-gray-500'>BLACK OAK</h1>
          <h1 className='text-sm text-gray-500'>LARGE STATEMENT RING. BALL <br /> MEASURES 0.75 INCHES.</h1>

          {/* The Drop Down for the Product Page */}
          <form className='gap-4 grid grid-cols-1'>
            {/* Size Dropdown */}
            <div className='text-xs flex gap-12 items-center'>
              <label>Size</label>
              <ReactDropdown options={size} onChange={(value) => { setInputSize(value) }} value={inputSize} className='w-80 p-4 border border-black' />
            </div>

            {/* Quantity dropdown */}
            <div className='text-xs flex gap-6 items-center'>
              <label>Quantity</label>
              <ReactDropdown options={num} onChange={(value) => { setInputNum(value) }} value={inputNum} className='w-80 p-4 border border-black' />
            </div>
            {/* The Price of the Item on that Product Page */}
            <h1 className='text-2xl font-semibold'>{"$500.00"}</h1>

            {/* The Add to Cart Button */}
            <button className='bg-black w-full h-10 text-white'>Add to Cart</button>
          </form>

        </div>

      </div>

    </div>
  )
}

export default ProductPage