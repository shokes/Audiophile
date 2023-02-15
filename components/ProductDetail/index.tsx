import { render } from 'storyblok-rich-text-react-renderer';
import Image from 'next/image';
import { SbBlokData } from '@storyblok/react';
import { ProductDetailStoryblok } from '@/@types/generated/storyblok';

interface ProductDetailProps {
  blok: SbBlokData & ProductDetailStoryblok;
}

const ProductDetail = ({ blok }: ProductDetailProps) => {
  return (
    <section className='text-gray-600 body-font'>
      <div className='container mx-auto flex px-5 py-24 items-center justify-center flex-col'>
        {blok && (
          <Image
            className='md:h-96 w-full mb-10 object-cover object-center rounded'
            alt='ddd'
            src={blok.image.filename}
            width={300}
            height={300}
          />
        )}
        <div className='text-center lg:w-2/3 w-full'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
            {blok.name}
          </h1>
          <h1 className='title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-600'>
            {blok.description}
          </h1>
        </div>
      </div>
    </section>
  );
};
export default ProductDetail;
