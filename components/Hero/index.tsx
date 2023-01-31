import React from 'react';
import Navigation from '../Navigation';
import heroImage from '../../public/hero/image-hero.jpg';
import Image from 'next/image';
import Typography from '../Typography';
import Button from '../Button';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='relative isolate overflow-hidden'>
      <Image
        src={heroImage}
        alt='hero'
        className='absolute inset-0 -z-10 h-full w-full object-cover 2xl:object-fill'
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
            <Typography as='h1'>XX99 Mark II Headphones</Typography>
          </div>
          <div className='opacity-75 mb-6 w-[349px]'>
            <Typography as='xsmall' weight='font-medium'>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
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
