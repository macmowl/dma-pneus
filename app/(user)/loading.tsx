import Image from 'next/image';
import React from 'react';

const loading = () => {
  return (
    <div className='flex justify-center flex-grow'>
      <div className='flex py-10'>
        <p className='text-lg text-gray-400'>loading...</p>
      </div>
    </div>
  );
};

export default loading;
