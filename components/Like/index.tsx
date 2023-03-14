import React from 'react';
import Button from '../Button';
import Image from 'next/image';
import Typography from '../Typography';
import { storyblokEditable, SbBlokData } from '@storyblok/react';
import { LikeStoryblok } from '@/@types/generated/storyblok';
import { resolveLink } from '@/utils/storyblok/resolveLinks';

interface LikeProps {
  like: SbBlokData & LikeStoryblok;
}

const Like = ({ like }: LikeProps) => {
  const resolvedLink = resolveLink(like.link);

  return (
    <div {...storyblokEditable(like)}>
      <div className='flex flex-col items-center gap-10 mt-16'>
        {like.image && like.name && (
          <Image
            src={like.image?.filename}
            width={350}
            height={318}
            alt={like.name}
          />
        )}
        <div>
          <Typography as='h5' weight='font-bold'>
            {like.name}
          </Typography>
        </div>
        <div className='text-white'>
          <Button
            bg='bg-brand-amber'
            hover='hover:bg-brand-pastelYellow'
            link={resolvedLink}
            block={false}
          >
            see product
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Like;
