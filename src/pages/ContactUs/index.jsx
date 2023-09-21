import React from 'react'

function ContactUs() {
    return (
        <div className='flex flex-col items-center justify-center'>
            {/* Image at the top */}
            <img src="/src/assets/images/Image14.png" alt="The Image at the top of the Contact Us page" className='w-629 h-418' />

            {/* Contact Us Heading */}
            <h1 className='mt-10 mb-4 text-center pr-96'>CONTACT US</h1>

            {/* Name and Email Text Boxes */}
            <div className='flex space-x-4 mb-4 justify-normal'>
                <input type="text" placeholder='Name' className='flex-1 p-2 border rounded border-gray-900 w-70 h-9 pr-20' />

                <input type="text" placeholder='Email' className='flex-1 p-2 border rounded border-gray-900 w-70 h-9' />
            </div>

            {/* Phone Text Box */}
            <input type="text" placeholder='Phone' capture className='w-1/3 p-2 mb-4 border rounded border-gray-900' />

            {/* Message Tex Box */}
            <textarea name="Message" id="message-id" cols="30" rows="10" placeholder='Message'
                className='w-1/3 h-32 mb-4 border rounded border-gray-900'></textarea>

            {/* <textarea placeholder="Message" className="w-1/3 p-2 mb-4 border rounded h-32 border-gray-900"></textarea> */}


            {/* Send Button */}
            <button className='w-1/3 p-1 border rounded border-gray-900 bg-black text-white mb-10'>
                SEND
            </button>

        </div>
    )
}

export default ContactUs