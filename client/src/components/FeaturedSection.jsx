import { ArrowRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const FeaturedSection = () => {
    const navigate = useNavigate();
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44
    overflow-hidden'>
      <div className='relative flex items-center justify-between
      pt-20 pb-10'>
        <p className='=text-gray-300 font-medium text-lg'>Now Showing </p>
        <button onClick={()=>navigate('/movies')}className='px-4 py-1 sm:px-7 sm:py-2 bg-cyan-500 hover:bg-cyan-400 
        text-white font-medium rounded-full cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-cyan-400/60'>
            View All
             <ArrowRight className='=group-hover:translate-x-0.5 transition w-4.5 h-4.5'/>
             </button>
      </div>
      <div></div>
      <div></div>
    </div>
  )
}

export default FeaturedSection
