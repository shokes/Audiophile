import React from 'react';
import Typography from '../Typography';
import Button from '../Button';
import { SbBlokData, storyblokEditable } from '@storyblok/react';
import Image from 'next/image';
import { resolveLink } from '@/utils/storyblok/resolveLinks';
import { HomeProductTwoStoryblok } from '@/@types/generated/storyblok';
import Container from '../Container';
import SlideUp from '../Animation/slideUp';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

interface HomeProductTwoProps {
  blok: SbBlokData & HomeProductTwoStoryblok;
}

const HomeProductTwo = ({ blok }: HomeProductTwoProps) => {
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
      <div className='mt-[48px]' {...storyblokEditable(blok)}>
        <div className='relative isolate overflow-hidden'>
          {blok && (
            <div>
              <Image
                src={blok.desktop_image?.filename as string}
                alt={blok.name}
                className='absolute hidden lg:block inset-0 -z-10 object-cover rounded-lg'
                fill
              />

              <Image
                src={blok.tablet_image?.filename as string}
                alt={blok.name}
                className='absolute hidden md:block lg:hidden inset-0 -z-10 object-cover rounded-lg'
                fill
              />
              <Image
                src={blok.mobile_image?.filename as string}
                alt={blok.name}
                className='absolute  md:hidden inset-0 -z-10 object-cover rounded-lg'
                fill
              />
            </div>
          )}
          <div className=' pb-[151px] pl-[24px] md:pl-[95px] pt-[101px] text-black'>
            <div className='mb-6 w-[398px]' ref={ref}>
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

export default HomeProductTwo;
