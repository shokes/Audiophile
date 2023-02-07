import React from 'react';
import Image from 'next/image';
import Typography from '../Typography';
import { SbBlokData } from '@storyblok/react';
import { HomeProductFourStoryblok } from '@/@types/generated/storyblok';

interface HomeProductFourProps {
  blok: SbBlokData & HomeProductFourStoryblok;
}

const HomeProductFour = ({ blok }: HomeProductFourProps) => {
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
            {blok && blok.description}
          </Typography>
        </div>
      </div>
      {blok && (
        <Image
          src={`https://${blok.image}`}
          width={540}
          height={588}
          alt='gear'
          className='rounded-lg object-cover'
        />
      )}
    </div>
  );
};

export default HomeProductFour;
