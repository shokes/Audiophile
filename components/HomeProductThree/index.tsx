import React from 'react';
import Typography from '../Typography';
import Button from '../Button';
import Image from 'next/image';
import { SbBlokData } from '@storyblok/react';
import { HomeProductThreeStoryblok } from '@/@types/generated/storyblok';
import { resolveLink } from '@/utils/storyblok/resolveLinks';
import { storyblokEditable } from '@storyblok/react';
import Container from '../Container';

interface HomeProductThreeProps {
  blok: SbBlokData & HomeProductThreeStoryblok;
}

const HomeProductThree = ({ blok }: HomeProductThreeProps) => {
  const resolvedLink = resolveLink(blok.link);

  return (
    <Container>
      <div
        {...storyblokEditable(blok)}
        className='mt-[48px] flex items-center justify-between'
      >
        <div>
          {blok && (
            <Image
              src={`https://${blok.image}`}
              height={320}
              width={540}
              alt='earphones'
              className='object-cover rounded-lg'
            />
          )}
        </div>

        <div className='bg-brandGray-200 rounded-lg h-[320px] w-[540px]'>
          <div className='pt-[101px] pl-[95px] pr-[198px]'>
            <div className='mb-6 w-[398px] text-black'>
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

export default HomeProductThree;
