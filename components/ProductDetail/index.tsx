import { render } from 'storyblok-rich-text-react-renderer';
import Image from 'next/image';
import { SbBlokData } from '@storyblok/react';
import { ProductDetailStoryblok } from '@/@types/generated/storyblok';
import Navigation from '../Navigation';
import Typography from '../Typography';

interface ProductDetailProps {
  blok: SbBlokData & ProductDetailStoryblok;
}

const ProductDetail = ({ blok }: ProductDetailProps) => {
  console.log(blok);
  return (
    <section className='text-black body-font'>
      <div className='bg-black '>
        <div className='max-w-[1110px]  mx-auto pb-[37px] pt-8'>
          <Navigation shoppingCart={true} />
        </div>
      </div>

      <div className='max-w-[1110px] mx-auto'>
        <div className='opacity-50 mb-[56px] mt-[79px]'>
          <Typography transform='capitalize' as='xsmall'>
            go back
          </Typography>
        </div>

        <div className='flex items-center gap-[124.5px]'>
          {blok.image && (
            <Image
              className=' object-cover object-center rounded'
              alt='ddd'
              src={blok.image.filename}
              width={540}
              height={560}
            />
          )}

          <div className=''>
            {blok.new && (
              <div className='mb-4 text-brand-amber'>
                <Typography as='p' transform='uppercase' weight='font-normal'>
                  new product
                </Typography>
              </div>
            )}
            <div>
              <Typography as='h2' weight='font-bold' transform='uppercase'>
                {blok.name}
              </Typography>
            </div>
            <div className='mb-8'>
              <Typography as='h2' weight='font-bold' transform='uppercase'>
                {blok.category}
              </Typography>
            </div>
            <div className='mb-10 opacity-50'>
              <Typography as='small' weight='font-medium'>
                {blok.description}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductDetail;
