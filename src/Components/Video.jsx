import React from 'react';

const Video = () => {
  return (
    <div 
      className="relative flex justify-center items-center bg-cover bg-center h-[500px]" 
      style={{ backgroundImage: `url('/path-to-your-image')` }}
    >
      <a href="https://www.youtube.com/watch?v=xxyVHIrjcqw" className="absolute z-10">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
          <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M6.5 5.5a1 1 0 011.5-.866L14 7.29a1 1 0 010 1.732l-6 3.464a1 1 0 01-1.5-.866V5.5z" clipRule="evenodd"></path>
          </svg>
        </div>
      </a>

      <div className="text-center text-white z-10">
        <h2 className="text-4xl font-bold">Feel the authentic & original taste from us</h2>
      </div>

      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  )
}

export default Video;
