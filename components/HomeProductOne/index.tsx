import React from 'react';
import Typography from '../Typography';
import Button from '../Button';
import Link from 'next/link';
import Image from 'next/image';
import speaker from '../../public/image-removebg-preview(38).png';

const HomeProductOne = () => {
  return (
    <div className='px-[151px] mt-[200px]'>
      <div className='bg-brand-amber w-full gap-x-[138.28px] rounded-lg flex items-end justify-center'>
        <div>
          <Image src={speaker} width={500} height={500} alt='dfdfd' />
        </div>
        <div className='w-[349px] text-white  pt-[133px] pb-[124px]'>
          <div className='mb-6'>
            <Typography as='h1' weight='font-bold'>
              ZX9 SPEAKER
            </Typography>
          </div>
          <div className='mb-10'>
            <Typography as='xsmall' weight='font-medium'>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </Typography>
          </div>
          <Button color='black' hover='[#4C4C4C]'>
            <Link className='uppercase' href='/product'>
              See product
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeProductOne;
