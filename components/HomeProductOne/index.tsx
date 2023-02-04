import React from 'react';
import Typography from '../Typography';
import Button from '../Button';
import Link from 'next/link';
import Image from 'next/image';
import speaker from '../../public/image-speaker-zx9.png';
import smallOval from '../../public/OvalSmall.png';
import mdOval from '../../public/OvalMd.png';
import lgOval from '../../public/OvalLg.png';

const HomeProductOne = () => {
  return (
    <div className='max-w-[1110px]  mx-auto mt-[168px]'>
      <div className='bg-brand-amber w-full relative  rounded-lg flex gap-[138.28px] justify-center'>
        <div className='mt-[133px] z-30'>
          <Image
            src={speaker}
            width={410.23}
            height={493}
            alt='dfdfd'
            className='object-cover '
          />
        </div>
        <Image
          className='absolute left-[4.8rem] opacity-50 top-[20rem]'
          alt='oval'
          src={mdOval}
          width={472}
          height={472}
        />
        <Image
          className='absolute top-[18rem]  opacity-50 left-[2.8rem]'
          alt='oval'
          src={mdOval}
          width={542}
          height={542}
        />
        <Image
          className='absolute top-[-1rem] z-0 opacity- left-[-9rem]'
          alt='oval'
          src={mdOval}
          width={944}
          height={944}
        />

        <div className='w-[349px] text-white mt-[133px] pb-[124px]'>
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
          {/* <div className='z-50'>
            <Button color='black' hover='[#4C4C4C]'>
              <Link className='uppercase z-50' href='/product'>
                See product
              </Link>
            </Button>
          </div> */}
          <button className='z-50 bg-black w-[500px]'>dddf</button>
        </div>
      </div>
    </div>
  );
};

export default HomeProductOne;
