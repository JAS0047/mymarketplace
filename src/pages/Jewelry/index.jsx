

function Jewelry() {
  const productLabel = [{
    title: "Kaila Dress Es",
    priceRange: "$325.00 - $450.00",
    pic: "/src/assets/images/Image1.png"
  },
  {
    title: "Kaila Dress Es",
    priceRange: "$325.00 - $450.00",
    pic: "/src/assets/images/Image2.png"
  }, {
    title: "Kaila Dress Es",
    priceRange: "$325.00 - $450.00",
    pic: "/src/assets/images/Image3.png"
  },
  {
    title: "Kaila Dress Es",
    priceRange: "$325.00 - $450.00",
    pic: "/src/assets/images/Image4.png"
  },
  {
    title: "Kaila Dress Es",
    priceRange: "$325.00 - $450.00",
    pic: "/src/assets/images/Image5.png"
  },
  {
    title: "Kaila Dress Es",
    priceRange: "$325.00 - $450.00",
    pic: "/src/assets/images/Image6.png"
  },
  {
    title: "Kaila Dress Es",
    priceRange: "$325.00 - $450.00",
    pic: "/src/assets/images/Image7.png"
  },
  {
    title: "Kaila Dress Es",
    priceRange: "$325.00 - $450.00",
    pic: "/src/assets/images/Image8.png"
  }]
  return (
    <div className='grid grid-cols-1 gap-4 place-items-center'>
      {/* first  items */}
      <div className='grid grid-cols-2 gap-4 lg:grid-cols-4'>
        {productLabel.map((product) => {
          return (
            <>
              <div className='w-40 md:w-60 flex flex-col items-center gap-2'>
                {/* Picture1 */}
                <a className='hover:shadow-2xl shadow-xl hover:shadow-red-500 hover:cursor-pointer'>
                  <div className='width-full place-items-center grid grid-cols-1'><img src={product.pic} /></div>
                </a>
                {/* label */}
                <div className=' w-full md:w-8/12  text-left'>
                  <p className='text-sm'>
                    {product.title}
                  </p>
                  <p className='text-sm'>
                    {product.priceRange}
                  </p>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Jewelry