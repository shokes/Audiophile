import React from 'react';
import Navigation from '../Navigation';
import Image from 'next/image';
import Typography from '../Typography';
import Button from '../Button';
import Link from 'next/link';
import { SbBlokData, storyblokEditable } from '@storyblok/react';
import { HeroStoryblok } from '@/@types/generated/storyblok';

interface HeroProps {
  blok: SbBlokData & HeroStoryblok;
}

const Hero = ({ blok }: HeroProps) => {
  return (
    <div
      className='relative isolate overflow-hidden'
      {...storyblokEditable(blok)}
    >
      <Image
        src={`https://${blok.image}`}
        alt='hero'
        className='absolute inset-0 -z-10 h-full w-full object-cover 2xl:object-fill'
        fill
      />
      <div className='px-[165px]'>
        <Navigation />
        <div className='text-white pb-[151px]'>
          <div className='mb-6 opacity-50'>
            <Typography as='p' weight='font-normal'>
              New product
            </Typography>
          </div>
          <div className='mb-6 w-[398px]'>
            <Typography as='h1'>{blok.title}</Typography>
          </div>
          <div className='opacity-75 mb-6 w-[349px]'>
            <Typography as='xsmall' weight='font-medium'>
              {blok.description}
            </Typography>
          </div>
          <Button color='brand-amber' hover='brand-pastelYellow'>
            <Link className='uppercase' href='/product'>
              See product
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
