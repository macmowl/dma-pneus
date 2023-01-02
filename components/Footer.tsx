import Link from 'next/link';
import React from 'react';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Pneus', href: '/pneus' },
  { name: 'Entretien', href: '/entretien' },
  { name: 'Blog', href: '/blog' },
];

const Footer = () => {
  return (
    <footer className='border-t border-gray-300 py-12 text-center flex flex-col items-center w-full'>
      <ul className='flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 sm:gap-x-6 text-gray-500 mb-6'>
        {navigation.map((item, index) => (
          <li key={index} className='hover:text-gray-800'>
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <p className='text-sm'>©2023 DMA - Tous droits réservés</p>
    </footer>
  );
};

export default Footer;
