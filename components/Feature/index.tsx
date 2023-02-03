import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Typography from '../Typography';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { storyblokEditable } from '@storyblok/react';
import { SbBlokData } from '@storyblok/react';
import { FeatureStoryblok } from '@/@types/generated/storyblok';

interface FeatureProps {
  feature: SbBlokData & FeatureStoryblok;
}

const Feature = ({ feature }: FeatureProps) => {
  return (
    <div {...storyblokEditable(feature)}>
      <Link
        key={feature.name}
        href='/'
        className='flex hover:text-brand-amber  rounded-lg flex-col duration-200 relative items-center h-[204px] bg-brandGray-200'
      >
        <div className='relative w-[122.95px] h-8'>
          <Image
            src={`https://${feature.image}`}
            alt={feature.name as string}
            width={500}
            height={500}
            className='object-contain absolute -top-16'
          />
        </div>
        <div className='text-center text-black mb-3.5 absolute top-[116px]'>
          <Typography as='h6' transform='uppercase' weight='font-bold'>
            {feature.name}
          </Typography>
        </div>
        <div className=' absolute top-[156px]  duration-200 text-center flex justify-center'>
          <div className='opacity-50'>
            <Typography as='small' transform='uppercase' weight='font-bold'>
              Shop
            </Typography>
          </div>
          <MdOutlineKeyboardArrowRight className='w-[26px] h-[26px] text-brand-amber' />
        </div>
      </Link>
    </div>
  );
};

export default Feature;
