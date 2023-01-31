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
    <nav className='mb-32 flex pt-8 border-b border-white/20 pb-9 items-center justify-between text-white'>
      <Link href='/' className='text-logo'>
        audiophile
      </Link>

      <div className='hidden lg:flex lg:gap-x-[34px]'>
        {navigation.map((item) => {
          const { name, href } = item;
          return (
            <div className='hover:text-brand-amber duration-200' key={name}>
              <Typography as='small' weight='font-bold' transform='uppercase'>
                <Link href={href}>{name}</Link>
              </Typography>
            </div>
          );
        })}
      </div>
      <div>
        <AiOutlineShoppingCart className='w-[23.33px]  h-[20px]' />
      </div>
    </nav>
  );
};

export default Navigation;
