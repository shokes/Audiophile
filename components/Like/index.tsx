import React from 'react';
import Button from '../Button';
import Image from 'next/image';
import Typography from '../Typography';
import { storyblokEditable, SbBlokData } from '@storyblok/react';
import { resolveLink } from '@/utils/storyblok/resolveLinks';
import { LikeStoryblok } from '@/@types/generated/storyblok';
import SlideUp from '../Animation/slideUp';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

interface LikeProps {
  like: SbBlokData & LikeStoryblok;
}

const Like = ({ like }: LikeProps) => {
  const resolvedLink = resolveLink(like.link);

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [controls, inView]);

  return (
    <div {...storyblokEditable(like)}>
      <div className='flex flex-col items-center gap-10 mb-[56px]'>
        {like.image && like.name && (
          <div>
            <Image
              src={like.desktop_image?.filename as string}
              width={350}
              height={318}
              alt={like.name}
              className='hidden lg:block'
            />
            <Image
              src={like.tablet_image?.filename as string}
              width={350}
              height={318}
              alt={like.name}
              className='hidden md:block lg:hidden'
            />
            <Image
              src={like.mobile_image?.filename as string}
              width={750}
              height={318}
              alt={like.name}
              className=' md:hidden'
            />
          </div>
        )}
        <div>
          <SlideUp animate={controls}>
            <Typography as='h5' weight='font-bold'>
              {like.name}
            </Typography>
          </SlideUp>
        </div>
        <div className='text-white' ref={ref}>
          <Button
            bg='bg-brand-amber'
            hover='hover:bg-brand-pastelYellow'
            link={resolvedLink}
            width={false}
          >
            see product
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Like;
