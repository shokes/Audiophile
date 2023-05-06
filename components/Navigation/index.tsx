import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Cart from '../Cart';
import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Headphones', href: '/headphones' },
  { name: 'Speakers', href: '/speakers' },
  { name: 'Earphones', href: '/earphones' },
];

const Navigation = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Disclosure as='nav'>
      {({ open }) => (
        <>
          <div className='text-white'>
            <div className='relative'>
              <div className='flex items-center justify-between  md:justify-start lg:justify-between'>
                <div className='flex items-center lg:hidden'>
                  {/* Mobile menu button*/}
                  <Disclosure.Button className='inline-flex items-center justify-center rounded-md text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                    ) : (
                      <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                </div>
                <Link href='/' className='text-logo md:ml-[32px] lg:ml-0'>
                  audiophile
                </Link>

                <div className='hidden lg:flex lg:gap-x-[34px]'>
                  {navigation.map((item) => {
                    const { name, href } = item;
                    return (
                      <div
                        className='hover:text-brand-amber duration-200'
                        key={name}
                      >
                        <span className='text-sm font-bold uppercase'>
                          <Link href={href}>{name}</Link>
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className='md:absolute md:right-0 lg:static'>
                  <AiOutlineShoppingCart
                    className='w-6  text-white h-6 cursor-pointer'
                    onClick={() => setOpenModal(!openModal)}
                  />

                  <div className=''>{openModal && <Cart />}</div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className=' mt-7'>
            <div className='flex flex-col gap-3'>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='block  text-white'
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navigation;
