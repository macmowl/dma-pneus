'use client';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Pneus', href: '/pneus' },
  { name: 'Entretien', href: '/entretien' },
  // { name: 'Blog', href: '/blog' },
];

const Header = () => {
  const path = usePathname();
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    console.log('clicked');
    setOpen(!open);
  };

  return (
    <header className='flex items-center justify-between py-4 px-4 max-w-7xl w-full'>
      <div>
        <Link href='/'>
          <p className='font-bold italic text-2xl'>DMA</p>
        </Link>
      </div>
      <div className='flex justify-between'>
        <div className='flex items-center sm:hidden'>
          <button
            type='button'
            className='inline-flex border-orange-500 items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white'
            aria-controls='mobile-menu'
            aria-label='mobile-menu'
            aria-expanded='false'
            onClick={handleClick}
          >
            <svg
              className='block h-6 w-6'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>

            <svg
              className='hidden h-6 w-6'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
        <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
          <div className={`${open ? 'block' : 'hidden'} sm:ml-6 sm:block`}>
            <div className='flex flex-col pt-24 sm:pt-0 absolute top-0 left-0 right-0 bottom-0 bg-white sm:bg-transparent z-10 sm:relative sm:flex-row items-center gap-8'>
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`text-gray-900 text-lg hover:transition-all hover:border-orange-600 hover:border-b-2
                    ${
                      path == item.href
                        ? 'border-orange-600 border-b-2'
                        : 'border-[#FAFAFA] border-b-2'
                    }
                  `}
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href='rendezvous'
                className={
                  path == '/rendezvous'
                    ? 'bg-[#007392] text-white px-3 py-2 rounded-md text-lg'
                    : 'bg-[#008EB3] py-2 px-3 rounded-md text-white text-lg hover:bg-[#007392]'
                }
                onClick={() => setOpen(false)}
              >
                Rendez-vous
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
