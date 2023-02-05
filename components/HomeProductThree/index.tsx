import React from 'react';
import Typography from '../Typography';
import Button from '../Button';
import earphones from '../../public/image-earphones-yx1.jpg';
import Image from 'next/image';

const HomeProductThree = () => {
  return (
    <div className='max-w-[1110px]  mx-auto mt-[48px] flex items-center justify-between'>
      <div>
        <Image
          src={earphones}
          height={320}
          width={540}
          alt='earphones'
          className='object-cover rounded-lg'
        />
      </div>

      <div className='bg-brandGray-200 rounded-lg h-[320px] w-[540px]'>
        <div className='pt-[101px] pl-[95px] pr-[198px]'>
          <div className='mb-6 w-[398px] text-black'>
            <Typography as='h4' weight='font-bold'>
              YX1 EARPHONES
            </Typography>
          </div>
          <Button hover='black' />
        </div>
      </div>
    </div>
  );
};

export default HomeProductThree;
