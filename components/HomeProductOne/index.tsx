import React from 'react';
import Typography from '../Typography';
import Button from '../Button';
import Image from 'next/image';
import mdOval from '../../public/OvalMd.png';
import { storyblokEditable } from '@storyblok/react';
import { SbBlokData } from '@storyblok/react';
import { HomeProductOneStoryblok } from '@/@types/generated/storyblok';
import { resolveLink } from '@/utils/storyblok/resolveLinks';
import Container from '../Container';

interface HomeProductOneProps {
  blok: SbBlokData & HomeProductOneStoryblok;
}

const HomeProductOne = ({ blok }: HomeProductOneProps) => {
  const resolvedLink = resolveLink(blok.link);

  return (
    <Container>
      <div className='mt-[168px]' {...storyblokEditable(blok)}>
        <div className='bg-brand-amber w-full relative md:items-center md:text-center rounded-lg flex flex-col lg:flex-row md:gap-[64px] lg:gap-[138.28px] justify-center'>
          <div className='mt-[133px] hidden lg:block z-30'>
            <Image
              src={blok.desktop_image.filename as string}
              width={410.23}
              height={493}
              alt={blok.name as string}
              className='object-cover'
            />
          </div>

          <div className='hidden md:block lg:hidden z-30'>
            <Image
              src={blok.tablet_image.filename as string}
              width={197.21}
              height={237}
              alt={blok.name as string}
              className='object-cover'
            />
          </div>
          <Image
            className='absolute lg:left-[53px] md:rotate-180 lg:rotate-0 md:top-[-3px] md:left-[100px]   opacity-50 lg:top-[256px]'
            alt='oval'
            src={mdOval}
            width={515}
            height={515}
          />
          <Image
            className='absolute lg:top-[224px] md:rotate-180 lg:rotate-0 md:top-[-21px] md:left-[68px] opacity-50 lg:left-[22.4px]'
            alt='oval'
            src={mdOval}
            width={580}
            height={580}
          />
          <Image
            className='absolute lg:top-[-16px]  opacity-50 lg:left-[-148px]'
            alt='oval'
            src={mdOval}
            width={944}
            height={944}
          />
          <div className='w-[349px] z-30 text-white  lg:mt-[133px] pb-[124px]'>
            <div className='mb-6'>
              <Typography as='h1' weight='font-bold'>
                {blok.name}
              </Typography>
            </div>
            <div className='mb-10'>
              <p className='text-xs font-medium'> {blok.description}</p>
            </div>
            <div className='z-50'>
              <Button
                bg='bg-black'
                hover='hover:bg-brandGray-300'
                link={resolvedLink}
                block={false}
              >
                see product
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomeProductOne;
