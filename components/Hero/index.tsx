import React from 'react';
import Navigation from '../Navigation';
import Image from 'next/image';
import Typography from '../Typography';
import Button from '../Button';
import { SbBlokData, storyblokEditable } from '@storyblok/react';
import { HeroStoryblok } from '@/@types/generated/storyblok';
import { resolveLink } from '@/utils/storyblok/resolveLinks';
import Container from '../Container';
import { FadeIn } from '../Animations/fadeIn';
import SlideUp from '../Animations/slideUp';

interface HeroProps {
  blok: SbBlokData & HeroStoryblok;
}

const Hero = ({ blok }: HeroProps) => {
  const resolvedLink = resolveLink(blok.link);

  return (
    <div
      className='relative isolate overflow-hidden'
      {...storyblokEditable(blok)}
    >
      <Image
        src={blok.desktop_image?.filename as string}
        alt={blok.title}
        className='absolute hidden lg:block inset-0 -z-10 h-full w-full object-cover 2xl:object-fill'
        fill
      />

      <Image
        src={blok.tablet_image?.filename as string}
        alt={blok.title}
        className='absolute hidden md:block lg:hidden inset-0 -z-10 h-full w-full'
        width={500}
        height={500}
      />

      <Image
        src={blok.mobile_image?.filename as string}
        alt={blok.title}
        className='absolute md:hidden  inset-0 -z-10 h-full w-full '
        width={500}
        height={500}
      />

      <Container>
        <div className='border-b mb-32 border-white/20 pt-8  pb-9'>
          <Navigation />
        </div>
        <div className='text-white text-center md:w-[369px] lg:w-full mx-auto lg:text-left pb-[151px]'>
          <div className='mb-6 opacity-50'>
            <Typography as='p' weight='font-normal'>
              New product
            </Typography>
          </div>
          <div className='mb-6  lg:w-[398px] mx-auto lg:mx-0'>
            <SlideUp animate='animate'>
              <Typography as='h1' weight='font-bold' transform='uppercase'>
                {blok.title}
              </Typography>
            </SlideUp>
          </div>
          <div className='opacity-75 mb-6 lg:w-[349px] mx-auto lg:mx-0'>
            <FadeIn>
              <p className='text-xs font-medium'>{blok.description}</p>
            </FadeIn>
          </div>
          <Button
            bg='bg-brand-amber'
            hover='hover:bg-brand-pastelYellow'
            link={resolvedLink}
            block={false}
          >
            see product
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Hero;

//  <div className='mb-6 md:w-[400px] mx-auto lg:mx-0 overflow-y-hidden'></div>
