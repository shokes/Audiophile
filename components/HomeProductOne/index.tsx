import React from 'react';
import Typography from '../Typography';
import Button from '../Button';
import Image from 'next/image';
import lgOval from '../../public/lgoval.png';
import { storyblokEditable } from '@storyblok/react';
import { SbBlokData } from '@storyblok/react';
import { HomeProductOneStoryblok } from '@/@types/generated/storyblok';
import { resolveLink } from '@/utils/storyblok/resolveLinks';
import Container from '../Container';
import mdOval from '../../public/mdoval.png';
import bottomOval from '../../public/bottomoval.png';
import smOval from '../../public/smoval.png';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import SlideUp from '../Animation/slideUp';
import { FadeIn } from '../Animation/fadeIn';

interface HomeProductOneProps {
  blok: SbBlokData & HomeProductOneStoryblok;
}

const HomeProductOne = ({ blok }: HomeProductOneProps) => {
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
      <div className='mt-[168px]' {...storyblokEditable(blok)}>
        <div className='bg-brand-amber w-full relative items-center text-center lg:items-start lg:text-left rounded-lg flex flex-col lg:flex-row gap-[32px] md:gap-[64px] lg:gap-[138.28px] justify-center'>
          <div className='mt-[133px] hidden lg:block z-10'>
            <Image
              src={blok.desktop_image?.filename as string}
              width={410.23}
              height={493}
              alt={blok.name as string}
              className='object-cover'
            />
          </div>

          <div className='hidden mt-[52px] md:flex lg:hidden z-30'>
            <Image
              src={blok.tablet_image?.filename as string}
              width={197.21}
              height={237}
              alt={blok.name as string}
              className='object-cover'
            />
          </div>

          {/* mobile speaker */}
          <div className='mt-[55px] md:hidden z-30'>
            <Image
              src={blok.mobile_image?.filename as string}
              width={172.25}
              height={207}
              alt={blok.name as string}
              className='object-cover'
            />
          </div>

          {/* large oval one */}
          <Image
            className='absolute left-[53px] hidden lg:block   opacity-50 top-[256px]'
            alt='oval'
            src={lgOval}
            width={515}
            height={515}
          />

          {/* large oval two */}
          <Image
            className='absolute top-[224px] hidden lg:block opacity-50 left-[22.4px]'
            alt='oval'
            src={lgOval}
            width={580}
            height={580}
          />

          {/* large oval three */}
          <Image
            className='absolute hidden lg:block top-[-16px]  opacity-50 left-[-148px]'
            alt='oval'
            src={lgOval}
            width={944}
            height={944}
          />

          {/* medium oval one */}

          <Image
            className='absolute top-[-32px]  hidden md:block  lg:hidden  opacity-50'
            alt='oval'
            src={mdOval}
            width={515}
            height={515}
          />

          {/* medium oval two */}
          <Image
            className='absolute hidden md:block lg:hidden top-[-60px]  opacity-50'
            alt='oval'
            src={mdOval}
            width={580}
            height={580}
          />

          {/* medium oval three */}
          <Image
            className='absolute hidden top-[-256px] max-[988px]:top-[-237px] max-[953px]:top-[-199px] max-[909px]:top-[-158px] max-[869px]:top-[-122px] max-[793px]:top-[-82px]  md:block lg:hidden   opacity-50'
            alt='oval'
            src={bottomOval}
            width={944}
            height={944}
          />

          {/* small oval one */}

          <Image
            className='absolute top-[22px]  md:hidden  opacity-50'
            alt='oval'
            src={smOval}
            width={279}
            height={279}
          />

          {/* small oval two */}
          <Image
            className='absolute md:hidden top-0  opacity-50'
            alt='oval'
            src={smOval}
            width={320}
            height={320}
          />

          {/* medium oval three */}
          <Image
            className='absolute md:hidden top-[-199px] max-[726px]:top-[-172px]  max-[698px]:top-[-120px] max-[643px]:top-[-69px]   opacity-50  max-[595px]:top-[-25px]  max-[539px]:top-[22px] max-[483px]:top-[72px] max-[426px]:top-[123px] max-[365px]:top-[177px]'
            alt='oval'
            src={bottomOval}
            width={778}
            height={778}
          />

          <div className='md:w-[349px] z-10 text-white  lg:mt-[133px] pb-[124px]'>
            <div className='mb-6'>
              <SlideUp animate={controls}>
                <Typography as='h1' weight='font-bold'>
                  {blok.name}
                </Typography>
              </SlideUp>
            </div>
            <div className='mb-10' ref={ref}>
              <FadeIn>
                <p className='text-xs font-medium'> {blok.description}</p>
              </FadeIn>
            </div>

            <Button
              bg='bg-black'
              hover='hover:bg-brandGray-300'
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

export default HomeProductOne;
