import React from 'react'

const Header = ({toggle}) => {


  return (
    <>
        <div className='bg-black text-white py-4 text-center w-full flex justify-end'>
            <button className='mx-4' onClick={toggle}>Switch</button>
        </div>
    </>
  )
}

export default Header