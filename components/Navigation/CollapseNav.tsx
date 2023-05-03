import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Cart from '../Cart';
import { useState } from 'react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Headphones', href: '/headphones' },
  { name: 'Speakers', href: '/speakers' },
  { name: 'Earphones', href: '/earphones' },
];

const CollapseNav = () => {
  return (
    <nav className='flex items-center justify-between text-white'>
      <Link href='/' className='text-logo'>
        audiophile
      </Link>
      <div className='hidden lg:flex lg:gap-x-[34px]'>
        {navigation.map((item) => {
          const { name, href } = item;
          return (
            <div className='hover:text-brand-amber duration-200' key={name}>
              <span className='text-sm font-bold uppercase'>
                <Link href={href}>{name}</Link>
              </span>
            </div>
          );
        })}
      </div>
      {props.shoppingCart && (
        <div className='relatie'>
          <AiOutlineShoppingCart
            className='w-[23.33px]  text-white h-[20px] cursor-pointer'
            onClick={() => setOpen(!open)}
          />

          <div className='relative'>{open && <Cart />}</div>
        </div>
      )}
    </nav>
  );
};

export default CollapseNav;
