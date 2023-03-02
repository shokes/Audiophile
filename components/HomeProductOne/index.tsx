import React from 'react';
import Typography from '../Typography';
import Button from '../Button';
import Image from 'next/image';
import mdOval from '../../public/OvalMd.png';
import { storyblokEditable } from '@storyblok/react';
import { SbBlokData } from '@storyblok/react';
import { HomeProductOneStoryblok } from '@/@types/generated/storyblok';

interface HomeProductOneProps {
  blok: SbBlokData & HomeProductOneStoryblok;
}

const HomeProductOne = ({ blok }: HomeProductOneProps) => {
  return (
    <div
      className='max-w-[1110px]  mx-auto mt-[168px]'
      {...storyblokEditable(blok)}
    >
      <div className='bg-brand-amber w-full relative  rounded-lg flex gap-[138.28px] justify-center'>
        <div className='mt-[133px] z-30'>
          <Image
            src={`https://${blok.image}`}
            width={410.23}
            height={493}
            alt={blok.name as string}
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
              {blok.name}
            </Typography>
          </div>
          <div className='mb-10'>
            <Typography as='xsmall' weight='font-medium'>
              {blok.description}
            </Typography>
          </div>
          <div className='z-50'>
            <Button
              bg='black'
              hover='brandGray-300'
              link={blok.link?.cached_url}
            >
              see product
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProductOne;
