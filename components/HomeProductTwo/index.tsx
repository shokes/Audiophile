import React from 'react';
import Typography from '../Typography';
import Button from '../Button';
import { SbBlokData, storyblokEditable } from '@storyblok/react';
import Image from 'next/image';
import { resolveLink } from '@/utils/storyblok/resolveLinks';
import { HomeProductTwoStoryblok } from '@/@types/generated/storyblok';
import Container from '../Container';

interface HomeProductTwoProps {
  blok: SbBlokData & HomeProductTwoStoryblok;
}

const HomeProductTwo = ({ blok }: HomeProductTwoProps) => {
  const resolvedLink = resolveLink(blok.link);

  return (
    <Container>
      <div className='mt-[48px]' {...storyblokEditable(blok)}>
        <div className='relative isolate overflow-hidden'>
          {blok && (
            <Image
              src={`https://${blok.image}`}
              alt='hero'
              className='absolute inset-0 -z-10 object-cover rounded-lg'
              fill
            />
          )}
          <div className=' pb-[151px] pl-[95px] pt-[101px] text-black'>
            <div className='mb-6 w-[398px] '>
              <Typography as='h4' weight='font-bold'>
                {blok && blok.name}
              </Typography>
            </div>
            <Button hover='hover:bg-brandBlack-100' link={resolvedLink}>
              see product
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomeProductTwo;
