import React from 'react';
import { SbBlokData, storyblokEditable } from '@storyblok/react';

const FeatureSection = ({ blok }: any) => {
  // console.log(blok);

  return (
    <ul
      className='grid grid-cols-1 gap-x-[30px] sm:grid-cols-2 lg:grid-cols-3 px-[151px] mt-[200px]'
      {...storyblokEditable(blok)}
    >
      gfgfg
    </ul>
  );
};

export default FeatureSection;
