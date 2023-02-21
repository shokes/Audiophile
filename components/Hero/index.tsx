import React from 'react';
import Navigation from '../Navigation';
import Image from 'next/image';
import Typography from '../Typography';
import Button from '../Button';
import { SbBlokData, storyblokEditable } from '@storyblok/react';
import { HeroStoryblok } from '@/@types/generated/storyblok';
import Link from 'next/link';

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
      <div className='max-w-[1110px]  mx-auto'>
        <div className='border-b mb-32 border-white/20 pt-8  pb-9'>
          <Navigation shoppingCart={true} />
        </div>

        <div className='text-white pb-[151px]'>
          <div className='mb-6 opacity-50'>
            <Typography as='p' weight='font-normal'>
              New product
            </Typography>
          </div>
          <div className='mb-6 w-[398px]'>
            <Typography as='h1' weight='font-bold'>
              {blok.title}
            </Typography>
          </div>
          <div className='opacity-75 mb-6 w-[349px]'>
            <Typography as='xsmall' weight='font-medium'>
              {blok.description}
            </Typography>
          </div>
          <Button
            bg='brand-amber'
            hover='brand-pastelYellow'
            content='see product'
            link='/headphones/xx99-mark-ii'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
