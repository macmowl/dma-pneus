'use client';

import Image from 'next/image';
import Link from 'next/link';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

interface ServiceItemProps {
  image: string;
  title: string;
  desc: string;
  link: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  image,
  title,
  desc,
  link,
}) => {
  return (
    <li className='flex flex-col flex-1 items-center sm:flex-row gap-3'>
      <div className='aspect-square rounded-full max-w-[124px] flex-grow'>
        <Image src={image} alt={title} width={124} height={124} />
      </div>
      <div>
        <h3 className='font-bold text-lg'>{title}</h3>
        <p className='my-3'>{desc}</p>
        <Link href={link} className='text-orange-500 flex items-center gap-2'>
          <p>En savoir plus</p>
          <ArrowForwardIosRoundedIcon fontSize='small' />
        </Link>
      </div>
    </li>
  );
};

export default ServiceItem;
