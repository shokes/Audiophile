import React from 'react';
import Button from '../Button';
import Image from 'next/image';
import Typography from '../Typography';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react';

// ! to fix typings later
const Like = ({ like }: any) => {
  return (
    <div {...storyblokEditable(like)}>
      <div className='flex flex-col items-center gap-10 mt-16'>
        <Image src={like.image?.filename} width={350} height={318} alt='dfd' />
        <div>
          <Typography as='h5' weight='font-bold'>
            {like.name}
          </Typography>
        </div>
        <div className='text-white'>
          <Button
            bg='brand-amber'
            hover='brand-pastelYellow'
            content='see product'
            link='/'
          />
        </div>
      </div>
    </div>
  );
};

export default Like;
