import React from 'react';
import Link from 'next/link';
import Typography from '../Typography';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Headphones', href: '#' },
  { name: 'Speakers', href: '#' },
  { name: 'Earphones', href: '#' },
];

const Navigation = () => {
  return (
    <div className=''>
      <div className='flex pt-[32px] border-b mb-[6rem] opacity-20pb-[36px] items-center justify-between text-white'>
        <div className='text-logo'>
          <Link href='/' passHref>
            audiophile
          </Link>
        </div>

        <div className='hidden lg:flex lg:gap-x-12'>
          {navigation.map((item) => (
            <div
              className='hover:text-brand-amber duration-200'
              key={item.name}
            >
              <Typography as='span' weight='font-bold' transform='uppercase'>
                <Link href={item.href}>{item.name}</Link>
              </Typography>
            </div>
          ))}
        </div>
        <div className=''>
          <AiOutlineShoppingCart className='w-[23.33px]  h-[20px]' />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
