import React from 'react';
import { storyblokEditable, SbBlokData } from '@storyblok/react';
import { InBoxStoryblok } from '@/@types/generated/storyblok';
import Typography from '../Typography';

interface InboxProps {
  box: SbBlokData & InBoxStoryblok;
}

const InBox = ({ box }: InboxProps) => {
  if (box) {
    return (
      <div {...storyblokEditable(box)} className='flex gap-[21px] mb-2'>
        <div className='text-brand-amber'>
          <span className='text-xs font-medium'>{box.quantity}x</span>
        </div>
        <div className='opacity-50'>
          <span className='text-xs font-medium capitalize'> {box.item}x</span>
        </div>
      </div>
    );
  }
  return <p>xxxx</p>;
};

export default InBox;
