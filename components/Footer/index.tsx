import React from 'react';
import { FiInstagram } from 'react-icons/fi';
import { FaTwitter } from 'react-icons/fa';
import { ImFacebook2 } from 'react-icons/im';
import Link from 'next/link';
import rec from '../../public/Rectangle.png';
import Image from 'next/image';
import Container from '../Container';

const socials = [
  {
    name: 'facebook',
    icon: <ImFacebook2 />,
    href: '/',
  },
  {
    name: 'twitter',
    icon: <FaTwitter />,
    href: '/',
  },
  {
    name: 'instagram',
    icon: <FiInstagram />,
    href: '/',
  },
];

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Headphones', href: '/headphones' },
  { name: 'Speakers', href: '/speakers' },
  { name: 'Earphones', href: '/earphones' },
];

const Footer = () => {
  return (
    <div className='text-white bg-black mx-auto pb-12 pt-[75px]'>
      <Container>
        <div className='relative'>
          <Image
            src={rec}
            width={101}
            height={4}
            alt='rec'
            className='absolute  md:left-0 -top-[75px]'
          />
          <div className='mb-9'>
            <nav className='flex items-center text-center  gap-[48px] flex-col lg:flex-row md:items-start md:gap-[32px] lg:items-center lg:justify-between text-white'>
              <Link href='/' className='text-logo'>
                audiophile
              </Link>
              <div className='flex flex-col gap-[16px] md:flex-row md:gap-x-[34px]'>
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
            </nav>
          </div>
          <div className='flex flex-col gap-[48px] md:gap-0 md:flex-row lg:items-center md:items-end justify-between'>
            <div className='md:w-[540px] opacity-50'>
              <div className='mb-14 text-center md:text-left'>
                <div className='text-xs font-medium'>
                  Audiophile is an all in one stop to fulfill your audio needs.
                  Were a small team of music lovers and sound specialists who
                  are devoted to helping you get the most out of personal audio.
                  Come and visit our demo facility - we’re open 7 days a week.
                </div>
              </div>
              <div>
                <div className='text-xs text-center md:text-left  font-bold'>
                  Copyright 2021. All Rights Reserved
                </div>
              </div>
            </div>
            <div className='flex items-center justify-center  gap-4'>
              {socials.map((social) => {
                return (
                  <Link
                    href={social.href}
                    className='hover:text-brand-amber duration-200 text-white'
                    key={social.name}
                  >
                    {social.icon}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
