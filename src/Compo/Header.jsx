import React from 'react'

const header = () => {
  return (
    <>
    <div className='bg-blue-800 text-white flex justify-between px-20 py-7 '>
      <h1 className='text-3xl'>Hassan shop</h1>
      <ul className='flex gap-7 text-[17px]'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
    </>
  )
}

export default header
