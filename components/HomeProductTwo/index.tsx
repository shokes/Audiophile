import React from 'react';
import Typography from '../Typography';
import Button from '../Button';
import Link from 'next/link';
import bg from '../../public/image-speaker-zx7.jpg';
import Image from 'next/image';

const HomeProductTwo = () => {
  return (
    <div className='max-w-[1110px]  mx-auto mt-[100px]'>
      <div className='relative isolate overflow-hidden'>
        <Image
          src={bg}
          alt='hero'
          className='absolute inset-0 -z-10 object-cover rounded-lg'
          fill
        />
        <div className=' pb-[151px] pl-[95px] pt-[101px]'>
          <div className='mb-6 w-[398px] text-black'>
            <Typography as='h4' weight='font-bold'>
              ZX7 SPEAKER
            </Typography>
          </div>
          <Button color='black' hover='[#4C4C4C]'>
            <Link className='uppercase text-white' href='/product'>
              See product
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeProductTwo;
