import React, { useState } from 'react';
import { dummyTrailers } from '../assets/assets';
import ReactPlayer from 'react-player';
import BlurCircle from './BlurCircle';
import { PlayCircleIcon } from 'lucide-react';

const TrailerSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden'>
      <p className='text-gray-300 font-medium text-lg max-w-[960px] mx-auto'>Trailers</p>

      {/* Video Player */}
      <div className='relative mt-6 bg-black rounded-lg overflow-hidden max-w-5xl mx-auto aspect-video'>
        <BlurCircle top='-100px' right='-100px' />

        {isPlaying ? (
          <ReactPlayer
            url={currentTrailer.videoUrl}
            controls
            playing={true}
            width='100%'
            height='100%'
            className='absolute top-0 left-0'
          />
        ) : (
          <div
            className="relative w-full h-full cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
            <img
              src={currentTrailer.image}
              alt="Trailer Thumbnail"
              className="w-full h-full object-cover"
            />
            <PlayCircleIcon
              className="absolute top-1/2 left-1/2 w-14 h-14 md:w-20 md:h-20 transform -translate-x-1/2 -translate-y-1/2 text-white"
              strokeWidth={1.5}
            />
          </div>
        )}
      </div>

      {/* Thumbnails */}
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mt-8 max-w-3xl mx-auto'>
        {dummyTrailers.map((trailer, index) => (
          <div
            key={index}
            className='relative bg-black p-1 rounded-md transition duration-300 transform hover:-translate-y-1 cursor-pointer'
            onClick={() => {
              setCurrentTrailer(trailer);
              setIsPlaying(false); // Show thumbnail again before playing
            }}
          >
            <img
              src={trailer.image}
              alt={`Trailer ${index + 1}`}
              className='rounded-md w-full h-36 object-cover'
            />
            <PlayCircleIcon
              strokeWidth={1.6}
              className="absolute top-1/2 left-1/2 w-6 h-6 md:w-10 md:h-10 transform -translate-x-1/2 -translate-y-1/2 text-white"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrailerSection;
