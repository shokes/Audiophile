import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import headphone from '../../public/features/image-removebg-preview(41).png';
import speaker from '../../public/features/image-zx9-speaker.png';
import earphone from '../../public/features/image-yx1-earphones.jpg';
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

const FeatureItem = () => {
  return (
    <ul className='grid grid-cols-1 gap-x-[30px] sm:grid-cols-2 lg:grid-cols-3 px-[151px] mt-[200px]'>
      {featureItems.map((feature) => (
        <li key={feature.name} className='relative h-[204px] bg-brandGray-200'>
          <div className='absolute -top-[2rem] right-1/2 '>
            <Image
              src={feature.image}
              alt={feature.name}
              className='object-contai'
            />
          </div>
          <div className='text-center mb-[14px] '>
            <Typography as='h6' transform='uppercase' weight='font-bold'>
              {feature.name}
            </Typography>
          </div>

          <Link
            href='/'
            className='hover:text-brand-amber hover:opacity-100 duration-200 text-center flex justify-center'
          >
            <div className='opacity-50 hover:opacity-100 dura'>
              <Typography as='small' transform='uppercase' weight='font-bold'>
                Shop
              </Typography>
            </div>

            <MdOutlineKeyboardArrowRight className='w-[26px] h-[26px] text-brand-amber' />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FeatureItem;
