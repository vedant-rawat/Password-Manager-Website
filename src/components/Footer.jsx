import React from 'react'

const Footer = () => {
  return (
    <>
        <div className='bg-black text-white py-4 text-center w-full'>
            <h2 className='text-xl'>Vedant Rawat</h2>
            <div className='flex justify-center items-center gap-8 mt-4'>
                <img className='invert w-6' src = "src/components/icons/insta.png" alt = "insta" />
                <img className='invert w-6' src = "src/components/icons/whatsapp.png" alt = "insta" />
                <img className='invert w-6' src = "src/components/icons/gmail.png" alt = "insta" />
            </div>  
            
        </div>
    </>
    
  )
}

export default Footer