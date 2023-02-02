import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import headphone from '../../public/features/image-removebg-preview(41).png';
import speaker from '../../public/features/image-removebg-preview(38).png';
import earphone from '../../public/features/Group 5.png';
import Typography from '../Typography';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const featureItems = [
  {
    name: 'headphones',
    image: headphone,
  },
  {
    name: 'speakers',
    image: speaker,
  },
  {
    name: 'earphones',
    image: earphone,
  },
];

const Feature = () => {
  return (
    <ul className='grid grid-cols-1 gap-x-[30px] sm:grid-cols-2 lg:grid-cols-3 px-[151px] mt-[200px]'>
      {featureItems.map((feature) => (
        <Link
          key={feature.name}
          href='/'
          className='flex hover:text-brand-amber flex-col duration-200 relative items-center h-[204px] bg-brandGray-200'
        >
          <div className='relative w-[122.95px] h-8'>
            <Image
              src={feature.image}
              alt={feature.name}
              className='object-contain absolute -top-16'
            />
          </div>
          <div className='text-center text-black mb-3.5 absolute top-[116px]'>
            <Typography as='h6' transform='uppercase' weight='font-bold'>
              {feature.name}
            </Typography>
          </div>
          <div className=' absolute top-[156px]  duration-200 text-center flex justify-center'>
            <div className='opacity-50'>
              <Typography as='small' transform='uppercase' weight='font-bold'>
                Shop
              </Typography>
            </div>
            <MdOutlineKeyboardArrowRight className='w-[26px] h-[26px] text-brand-amber' />
          </div>
        </Link>
      ))}
    </ul>
  );
};

export default Feature;
