'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import React from 'react';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Pneus', href: '/pneus' },
  { name: 'Entretien', href: '/entretien' },
  { name: 'Blog', href: '/blog' },
];

const Header = () => {
  const activeSegment = useSelectedLayoutSegment();

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
            className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
            aria-controls='mobile-menu'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
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
          <div className='hidden sm:ml-6 sm:block'>
            <div className='flex space-x-4 items-center gap-8'>
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`hover:border-orange-600 hover:border-b-4
                    ${
                      activeSegment == item.href
                        ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-lg'
                        : 'text-gray-900 text-lg'
                    }
                  `}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href='rendezvous'
                className={
                  activeSegment == '/rendezvous'
                    ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-lg'
                    : 'bg-[#008EB3] py-2 px-3 rounded-md text-white text-lg hover:bg-[#007392]'
                }
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
