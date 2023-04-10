import React from 'react';
import Image from 'next/image';
import Typography from '../Typography';
import { SbBlokData } from '@storyblok/react';
import { HomeProductFourStoryblok } from '@/@types/generated/storyblok';
import { storyblokEditable } from '@storyblok/react';
import Container from '../Container';

interface HomeProductFourProps {
  blok: SbBlokData & HomeProductFourStoryblok;
}

const HomeProductFour = ({ blok }: HomeProductFourProps) => {
  return (
    <Container>
      <div
        {...storyblokEditable(blok)}
        className='my-[200px] flex items-center justify-between'
      >
        <div className='w-[445px]'>
          <div className='mb-8'>
            <Typography weight='font-bold' as='h2' transform='uppercase'>
              Bringing you the <span className='text-brand-amber'>best</span>{' '}
              audio gear
            </Typography>
          </div>
          <div className='opacity-50'>
            <p className='text-xs font-medium'>{blok.description}</p>
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
    </Container>
  );
};

export default HomeProductFour;
