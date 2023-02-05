import React from 'react';
import Image from 'next/image';
import Typography from '../Typography';
import gear from '../../public/image-gallery-1.png';

const HomeProductFour = () => {
  return (
    <div className='max-w-[1110px] mx-auto mt-[200px] flex items-center justify-between'>
      <div className='w-[445px]'>
        <div className='mb-8'>
          <Typography weight='font-bold' as='h2' transform='uppercase'>
            Bringing you the <span className='text-brand-amber'>best</span>{' '}
            audio gear
          </Typography>
        </div>
        <div className='opacity-50'>
          <Typography weight='font-medium' as='xsmall'>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </Typography>
        </div>
      </div>

      <Image
        src={gear}
        width={540}
        height={588}
        alt='gear'
        className='rounded-lg object-cover'
      />
    </div>
  );
};

export default HomeProductFour;
