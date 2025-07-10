import React from 'react';
import { assets } from '../assets/assets';
import { ArrowRight, Calendar, Clock } from 'lucide-react'; 

const Herosection = () => {
  return (
    <div className='flex flex-col items-start justify-center gap-4
      px-6 md:px-16 lg:px-36 bg-[url("/backgroundImage.png")]
      bg-cover bg-center h-screen'>

    <img src={assets.marvelLogo} alt="" className="max-h-11 lg:h-11 mt-20" />

    <h1 className='text-5xl md:text-[70px] md:leading-[80px] font-semibold max-w-[1100px]'>
        Guardians <br /> of the Galaxy
      </h1>
    
    <div className='flex items-center gap-4 text-gray-300'>
        <span>Action | Adventure | Sci-Fi</span>

        <div className='flex items-center gap-1'>
          <Calendar className='w-4 h-4' /> 2018
        </div>

        <div className='flex items-center gap-1'>
          <Clock className='w-4 h-4' /> 2h 16m
        </div>
      </div>

      <p className='max-w-md text-gray-300'>In a Post-apocalyptic world, a group of survivors must band together 
        to fight against a ruthless warlord and his army of mutants. 
        As they navigate through the dangers of this new world, they discover the true meaning of friendship, loyalty, and sacrifice.</p>

      <button className=''>
        Explore Movies
        <ArrowRight className='w-5 h-5'/>
      </button>
    </div>

  );
};

export default Herosection;
