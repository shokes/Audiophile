import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Typography from '../Typography';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { storyblokEditable } from '@storyblok/react';
import { SbBlokData } from '@storyblok/react';
import { FeatureStoryblok } from '@/@types/generated/storyblok';
import { resolveLink } from '@/utils/storyblok/resolveLinks';

interface FeatureProps {
  feature: SbBlokData & FeatureStoryblok;
}

const Feature = ({ feature }: FeatureProps) => {
  const resolvedLink = resolveLink(feature.link);

  return (
    <div {...storyblokEditable(feature)}>
      <Link
        key={feature.name}
        href={resolvedLink}
        className='flex rounded-lg flex-col relative mt-[120px]  items-center h-[204px] bg-brandGray-200 box'
      >
        <Image
          src={`https://${feature.image}`}
          alt={feature.name as string}
          width={200}
          height={200}
          className='object-contain absolute -top-16'
        />
        <div className='text-center text-black mb-3.5 absolute top-[116px]'>
          <Typography as='h6' transform='uppercase' weight='font-bold'>
            {feature.name}
          </Typography>
        </div>
        <div className='absolute top-[156px]  duration-200 text-center flex justify-center'>
          <div className='opacity-50 boxName'>
            <span className='text-sm uppercase font-bold'>Shop</span>
          </div>
          <MdOutlineKeyboardArrowRight className='w-[26px] h-[26px] text-brand-amber' />
        </div>
      </Link>
    </div>
  );
};

export default Feature;
