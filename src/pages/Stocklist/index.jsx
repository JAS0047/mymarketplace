// import React from 'react'

function Stocklist() {
    return (
        <div className='flex flex-nowrap flex-col justify-center items-center'>
            <div className='flex max-w-2xl flex-col items-center justify-center bord'>
                {/* Image at the top center*/}
                <img src="/src/assets/images/Image15.png" alt="Stock List Image" className='mb-5 w-full' />

                {/* Stock List Label */}
                <h1 className='font-semi-bold mb-4 text-left w-full text-lg'>Stock List</h1>

                {/* United Kingdom Label */}
                <h1 className='mb-4 w-full'>United Kingdom</h1>

                {/* Three columns of texts with their headings */}
                <div className='grid grid-cols-3 gap-1 mb-8 text-sm text-start'>
                    {/* Column 1 */}
                    <div className='w-30'>
                        <h2 className='font-semibold'>Show Room</h2>
                        <p>20 West Cote Drive Thackley <br /> Bradford, United Kingdom <br />
                            Phone: +37529-653-64-93 <br />
                            Mo-Fr 13-20 <br />
                            Sat 12-18</p>
                    </div>

                    {/* Column 2 */}
                    <div className='w-30'>
                        <h2 className='font-semibold'>UK Fashion</h2>
                        <p>20 West Cote Drive Thackley Bradford, United Kingdom <br />
                            Phone: +37529-653-64-93 <br />
                            Mo-Fr 13-20 <br />
                            Sat 12-18</p>
                    </div>

                    {/* Column 3 */}
                    <div className='w-30'>
                        <h2 className='font-semibold'>Limited Showroom</h2>
                        <p>20 West Cote Drive Thackley Bradford, United Kingdom <br />
                            Phone: +37529-653-64-93 <br />
                            Mo-Fr 13-20 <br />
                            Sat 12-18</p>
                    </div>

                </div>

            </div>


        </div >

    )
}

export default Stocklist