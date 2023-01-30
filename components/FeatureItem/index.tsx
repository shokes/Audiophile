import React from 'react';
//import hero from '../../public/features/image-xx99-mark-one-headphones.jpg'
import Image from 'next/image';
import headphone from '../../public/features/image-xx99-mark-one-headphones.jpg';
import speaker from '../../public/features/image-zx9-speaker.png';
import earphone from '../../public/features/image-yx1-earphones.jpg';

const featureItems = [
  {
    name: 'headphones',
    image: headphone,
  },
  {
    name: 'speakers',
    image: speaker,
  },
  {
    name: 'earphones',
    image: earphone,
  },
];

const FeatureItem = () => {
  return (
    <ul
      role='list'
      className='grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3 px-[151px] mt-[200px]'
    >
      {featureItems.map((feature) => (
        <li
          key={feature.name}
          className='relative col-span-1 h-[204px]  bg-brandGray-200'
        >
          <span className='absolute -top-[552px]'>
            <Image
              src={feature.image}
              alt={feature.name}
              width={100}
              height={100}
            />
          </span>
          {feature.name}
        </li>
      ))}
    </ul>
  );
};

export default FeatureItem;
