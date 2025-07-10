import React from 'react'
import assets from '../assets/assets'
const Herosection = () => {
  return (
    <div className='flex flex-col items-start justify-center gap-4
    px-6 md:px-16 lg:px-36 bg-[url("/bg.jpg")]
    bg-cover bg-center h-screen'>
      <img src={assets.marvelLogo} alt ="" className="max-h-11 lg:h-11 mt-20"/>

      <h1> Guardians <br /> of the Galaxy</h1>
    </div>
  )
}

export default Herosection
