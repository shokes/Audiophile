import Image from 'next/image';
import { SbBlokData } from '@storyblok/react';
import { ProductDetailStoryblok } from '@/@types/generated/storyblok';
import Navigation from '../Navigation';
import Typography from '../Typography';
import { useRouter } from 'next/router';
import Button from '../Button';

interface ProductDetailProps {
  blok: SbBlokData & ProductDetailStoryblok;
}

const ProductDetail = ({ blok }: ProductDetailProps) => {
  const router = useRouter();

  return (
    <section className='body-font'>
      <div className='bg-black '>
        <div className='max-w-[1110px]  mx-auto pb-[37px] pt-8'>
          <Navigation shoppingCart={true} />
        </div>
      </div>

      <div className='max-w-[1110px] mx-auto'>
        <button
          className='opacity-50 mb-[56px] mt-[79px]'
          onClick={() => router.back()}
        >
          <Typography transform='capitalize' as='xsmall'>
            go back
          </Typography>
        </button>

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
            <div className='mb-10'>${blok.price}</div>
            <div className='flex items-center gap-2'>
              <span className='bg-brandGray-200 px-[52px] py-[15px]'>1</span>
              <div className='text-white'>
                <Button
                  bg='brand-amber'
                  hover='brand-pastelYellow'
                  content='add to cart'
                  link='/'
                  // link={`${product.content.category}/${product.content.slug}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductDetail;
