import React from 'react';
import Navigation from '../Navigation';
import Typography from '../Typography';
import { FiInstagram } from 'react-icons/fi';
import { FaTwitter } from 'react-icons/fa';
import { ImFacebook2 } from 'react-icons/im';
import Link from 'next/link';

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

const Footer = () => {
  return (
    <div className='text-white bg-black mx-auto mt-[200px] pb-12 pt-[75px]'>
      <div className='max-w-[1110px] mx-auto '>
        <div className='mb-9'>
          <Navigation shoppingCart={false} />
        </div>
        <div className='flex items-center justify-between'>
          <div className='w-[540px] opacity-50'>
            <div className='mb-14'>
              <Typography as='xsmall' weight='font-medium'>
                Audiophile is an all in one stop to fulfill your audio needs.
                Were a small team of music lovers and sound specialists who are
                devoted to helping you get the most out of personal audio. Come
                and visit our demo facility - we’re open 7 days a week.
              </Typography>
            </div>
            <div>
              <Typography as='xsmall' weight='font-bold'>
                Copyright 2021. All Rights Reserved
              </Typography>
            </div>
          </div>
          <div className='flex items-center gap-4'>
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
    </div>
  );
};
export default Footer;
