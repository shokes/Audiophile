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
        className='my-[120px] md:my-[96px] lg:my-[200px] lg:gap-[125px] flex flex-col-reverse lg:flex-row gap-y-[40px] items-center justify-between'
      >
        <div className='text-center lg:text-left md:w-[537px] lg:w-[445px]'>
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
          <div>
            <Image
              src={blok.desktop_image?.filename as string}
              width={540}
              height={588}
              alt='gear'
              className='rounded-lg object-cover hidden lg:block'
            />
            <Image
              src={blok.tablet_image?.filename as string}
              width={889}
              height={300}
              alt='gear'
              className='rounded-lg object-cover hidden md:block lg:hidden'
            />{' '}
            <Image
              src={blok.mobile_image?.filename as string}
              width={807}
              height={300}
              alt='gear'
              className='rounded-lg object-cover md:hidden'
            />{' '}
          </div>
        )}
      </div>
    </Container>
  );
};

export default HomeProductFour;
