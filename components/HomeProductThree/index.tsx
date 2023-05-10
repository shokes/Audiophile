import React from 'react';
import Typography from '../Typography';
import Button from '../Button';
import Image from 'next/image';
import { SbBlokData } from '@storyblok/react';
import { HomeProductThreeStoryblok } from '@/@types/generated/storyblok';
import { resolveLink } from '@/utils/storyblok/resolveLinks';
import { storyblokEditable } from '@storyblok/react';
import Container from '../Container';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import SlideUp from '../Animation/slideUp';

interface HomeProductThreeProps {
  blok: SbBlokData & HomeProductThreeStoryblok;
}

const HomeProductThree = ({ blok }: HomeProductThreeProps) => {
  const resolvedLink = resolveLink(blok.link);

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [controls, inView]);

  return (
    <Container>
      <div
        {...storyblokEditable(blok)}
        className='mt-[48px] grid grid-cols-1 md:grid-cols-2 md:gap-x-[11px] gap-y-[24px] lg:gap-x-[30px]'
      >
        {blok && (
          <div className='col-span-1'>
            <Image
              src={blok.desktop_image?.filename as string}
              height={320}
              width={540}
              alt={blok.name as string}
              className='object-cover hidden lg:block rounded-lg'
            />

            <Image
              src={blok.tablet_image?.filename as string}
              height={320}
              width={609}
              alt={blok.name as string}
              className='object-cover hidden md:block lg:hidden rounded-lg'
            />

            <Image
              src={blok.mobile_image?.filename as string}
              height={200}
              width={727}
              alt={blok.name as string}
              className='object-cover rounded-lg md:hidden'
            />
          </div>
        )}
        <div className='bg-brandGray-200 rounded-lg'>
          <div className=' py-[44px] lg:pt-[101px]  pl-[24px] md:pl-[41px] lg:pl-[95px]'>
            <div className='mb-[32px] md:mb-6 text-black' ref={ref}>
              <SlideUp animate={controls}>
                <Typography as='h4' weight='font-bold'>
                  {blok.name}
                </Typography>
              </SlideUp>
            </div>
            <Button
              hover='hover:bg-brandBlack-100'
              link={resolvedLink}
              width={false}
            >
              see product
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomeProductThree;
