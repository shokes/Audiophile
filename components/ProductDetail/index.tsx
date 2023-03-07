import Image from 'next/image';
import { SbBlokData } from '@storyblok/react';
import { ProductDetailStoryblok } from '@/@types/generated/storyblok';
import Navigation from '../Navigation';
import Typography from '../Typography';
import { useRouter } from 'next/router';
import Button from '../Button';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react';
import Counter from '../Counter';
import { addCommas } from '@/utils/general';
import InBox from '../InBox';

interface ProductDetailProps {
  blok: SbBlokData & ProductDetailStoryblok;
}

const ProductDetail = ({ blok }: ProductDetailProps) => {
  const router = useRouter();
  return (
    <section {...storyblokEditable(blok)}>
      <div className='body-font'>
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
          <div className='flex items-center gap-[124.5px] mb-[160px]'>
            {blok.image1 && (
              <Image
                className=' object-cover object-center rounded'
                alt='ddd'
                src={blok.image1.filename}
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
              <div className='mb-10'>
                <Typography as='h6' weight='font-bold'>
                  $ {addCommas(blok.price as number)}
                </Typography>
              </div>
              <div className='flex items-center gap-2'>
                <Counter paddingY='15px' paddingX='15px' gap='21px' />
                <div className='text-white'>
                  <Button bg='brand-amber' hover='brand-pastelYellow' link='/'>
                    add to cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className='flex gap-[125px] mb-[106px]'>
            <div className='w-[635px]'>
              <div className='mb-8'>
                <Typography transform='uppercase' as='h3' weight='font-bold'>
                  features
                </Typography>
              </div>
              <div className='mb-8 opacity-50'>
                <Typography as='xsmall' weight='font-medium'>
                  {blok.featureOne}
                </Typography>
              </div>
              <div className='opacity-50'>
                <Typography as='xsmall' weight='font-medium'>
                  {blok.featureTwo}
                </Typography>
              </div>
            </div>
            <div>
              <div className='mb-8'>
                <Typography transform='uppercase' as='h3' weight='font-bold'>
                  in the box
                </Typography>
              </div>
              {blok.inBox &&
                blok.inBox.map((box) => {
                  return <InBox box={box} key={box.item} />;
                })}
            </div>{' '}
          </div>

          <div className='flex gap-[30px] mb-[106px]'>
            <div>
              {blok.image2 && (
                <Image
                  className=' object-cover mb-8 rounded-lg'
                  alt='ddd'
                  src={blok.image2.filename}
                  width={445}
                  height={280}
                />
              )}

              {blok.image3 && (
                <Image
                  className=' object-cover rounded-lg'
                  alt='ddd'
                  src={blok.image3.filename}
                  width={445}
                  height={280}
                />
              )}
            </div>
            {blok.image4 && (
              <Image
                className=' object-cover  rounded-lg'
                alt='ddd'
                src={blok.image4.filename}
                width={635}
                height={592}
              />
            )}
          </div>
        </div>
        <div className='text-center mb-1'>
          <Typography transform='uppercase' as='h3' weight='font-bold'>
            you may also like
          </Typography>
        </div>
      </div>
      {(blok.body as SbBlokData[]).map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </section>
  );
};
export default ProductDetail;
