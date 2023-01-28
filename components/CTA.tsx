import Link from 'next/link';
import React from 'react';

interface Props {
  text: string;
  url: string;
  link: string;
}

const CTA: React.FC<Props> = ({ text, url, link }) => {
  return (
    <div className='bg-gray-200 rounded-lg py-8 px-8 sm:px-12 md:px-24 text-center flex flex-col justify-center items-center max-w-xl'>
      <h3 className='font-semibold text-base sm:text-lg md:text-xl mb-4 text-gray-700'>
        {text}
      </h3>
      <Link
        href={url}
        className='px-3 py-2 text-white font-semibold text-small sm:text-xl bg-[#008EB3] hover:bg-[#04738F] rounded-lg'
      >
        {link}
      </Link>
    </div>
  );
};

export default CTA;
