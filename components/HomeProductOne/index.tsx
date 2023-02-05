import React from 'react';
import Typography from '../Typography';
import Button from '../Button';
import Link from 'next/link';
import Image from 'next/image';
import speaker from '../../public/image-speaker-zx9.png';
import mdOval from '../../public/OvalMd.png';
import { storyblokEditable } from '@storyblok/react';

const HomeProductOne = ({ blok }: any) => {
  console.log(blok);
  return (
    <div
      className='max-w-[1110px]  mx-auto mt-[168px]'
      {...storyblokEditable(blok)}
    >
      <div className='bg-brand-amber w-full relative  rounded-lg flex gap-[138.28px] justify-center'>
        <div className='mt-[133px] z-30'>
          <Image
            src={speaker}
            width={410.23}
            height={493}
            alt='dfdfd'
            className='object-cover'
          />
        </div>
        <Image
          className='absolute left-[53px] opacity-50 top-[256px]'
          alt='oval'
          src={mdOval}
          width={515}
          height={515}
        />
        <Image
          className='absolute top-[224px]  opacity-50 left-[22.4px]'
          alt='oval'
          src={mdOval}
          width={580}
          height={580}
        />
        <Image
          className='absolute top-[-16px]  opacity-50 left-[-148px]'
          alt='oval'
          src={mdOval}
          width={944}
          height={944}
        />

        <div className='w-[349px] z-30 text-white mt-[133px] pb-[124px]'>
          <div className='mb-6'>
            <Typography as='h1' weight='font-bold'>
              ZX9 SPEAKER
            </Typography>
          </div>
          <div className='mb-10'>
            <Typography as='xsmall' weight='font-medium'>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </Typography>
          </div>
          <div className='z-50'>
            <Button bg='black' hover='[#4C4C4C]' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProductOne;