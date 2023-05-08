import Image from 'next/image';
import { SbBlokData } from '@storyblok/react';
import { ProductDetailStoryblok } from '@/@types/generated/storyblok';
import Navigation from '../Navigation';
import Typography from '../Typography';
import { useRouter } from 'next/router';
import Button from '../Button';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react';
import ProductDetailCounter from '../Counter/ProductDetailCounter';
import { addCommas } from '@/utils/general';
import InBox from '../InBox';
import { addToCart } from '@/redux/features/homeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Container from '../Container';
import SlideUp from '../Animation/slideUp';
import { FadeIn } from '../Animation/fadeIn';
import FadeOneBy from '../Animation/fadeOneBy';

interface ProductDetailProps {
  blok: SbBlokData & ProductDetailStoryblok;
}

const ProductDetail = ({ blok }: ProductDetailProps) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { tempQuantity } = useSelector((store: RootState) => store.home);

  return (
    <section {...storyblokEditable(blok)}>
      <div className='body-font'>
        <div className='bg-black '>
          <Container>
            <div className='pb-[37px] pt-8'>
              <Navigation />
            </div>
          </Container>
        </div>
        <Container>
          <div
            className='opacity-50 mb-[56px] mt-[79px] hover:text-brand-amber hover:opacity-100 cursor-pointer'
            onClick={() => router.back()}
          >
            <span className='text-xs capitalize'>go back</span>
          </div>
          <div className='flex flex-col md:flex-row items-center gap-[32px] md:gap-[124.5px] mb-[160px]'>
            {blok.image1 && (
              <div>
                <Image
                  className='object-cover object-center rounded hidden lg:block'
                  alt={blok.name}
                  src={blok.detail_desktop?.filename as string}
                  width={540}
                  height={560}
                />{' '}
                <Image
                  className='object-cover object-center rounded hidden md:block lg:hidden'
                  alt={blok.name}
                  src={blok.detail_tablet?.filename as string}
                  width={540}
                  height={560}
                />{' '}
                <Image
                  className='object-cover object-center rounded md:hidden'
                  alt={blok.name}
                  src={blok.detail_mobile?.filename as string}
                  width={740}
                  height={560}
                />
              </div>
            )}
            <div className='md:w-[445px]'>
              {blok.new && (
                <div className='mb-4 text-brand-amber'>
                  <Typography as='p' transform='uppercase' weight='font-normal'>
                    new product
                  </Typography>
                </div>
              )}
              <div>
                <SlideUp animate='animate'>
                  <Typography as='h2' weight='font-bold' transform='uppercase'>
                    {blok.name}
                  </Typography>
                </SlideUp>
              </div>
              <div className='mb-8'>
                <SlideUp animate='animate'>
                  <Typography as='h2' weight='font-bold' transform='uppercase'>
                    {blok.category}
                  </Typography>
                </SlideUp>
              </div>
              <div className='mb-10 opacity-50'>
                <FadeIn>
                  <p className='text-xs font-medium'>{blok.description}</p>
                </FadeIn>
              </div>
              <div className='mb-10'>
                <Typography as='h6' weight='font-bold'>
                  $ {addCommas(blok.price as number)}
                </Typography>
              </div>
              <div className='flex items-center gap-2'>
                <ProductDetailCounter />
                <div
                  className='text-white'
                  onClick={() => dispatch(addToCart([blok, tempQuantity]))}
                >
                  <Button
                    bg='bg-brand-amber'
                    hover='hover:bg-brand-pastelYellow'
                    block={false}
                  >
                    add to cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row gap-[125px] mb-[106px]'>
            <div className='lg:w-[635px]'>
              <div className='mb-8'>
                <Typography transform='uppercase' as='h3' weight='font-bold'>
                  features
                </Typography>
              </div>
              <div className='mb-8 opacity-50'>
                <FadeIn>
                  <p className='text-xs font-medium'>{blok.featureOne}</p>
                </FadeIn>
              </div>

              <div className='opacity-50'>
                <FadeIn>
                  <p className='text-xs font-medium'> {blok.featureTwo}</p>
                </FadeIn>
              </div>
            </div>
            <div className='md:flex lg:flex-col lg:gap-0  md:gap-[170px]'>
              <div className='mb-8'>
                <Typography transform='uppercase' as='h3' weight='font-bold'>
                  in the box
                </Typography>
              </div>
              <div>
                {blok.inBox &&
                  blok.inBox.map((box) => {
                    return <InBox box={box} key={box.item} />;
                  })}
              </div>
            </div>{' '}
          </div>

          <div className=' gap-[30px] mb-[106px] hidden md:flex'>
            <div>
              {blok.image2 && (
                <Image
                  className=' object-cover mb-8 rounded-lg'
                  alt={blok.name}
                  src={blok.image2.filename}
                  width={445}
                  height={280}
                />
              )}

              {blok.image3 && (
                <Image
                  className=' object-cover rounded-lg'
                  alt={blok.name}
                  src={blok.image3.filename}
                  width={445}
                  height={280}
                />
              )}
            </div>
            {blok.image4 && (
              <Image
                className=' object-cover  rounded-lg'
                alt={blok.name}
                src={blok.image4.filename}
                width={635}
                height={592}
              />
            )}
          </div>

          <div className=' gap-[30px] mb-[106px] flex flex-col md:hidden'>
            {blok.image2 && (
              <Image
                className=' object-cover mb-8 rounded-lg'
                alt={blok.name}
                src={blok.image2_mobile?.filename as string}
                width={845}
                height={280}
              />
            )}

            {blok.image3 && (
              <Image
                className=' object-cover rounded-lg'
                alt={blok.name}
                src={blok.image3_mobile?.filename as string}
                width={845}
                height={280}
              />
            )}

            {blok.image4 && (
              <Image
                className=' object-cover  rounded-lg'
                alt={blok.name}
                src={blok.image4_mobile?.filename as string}
                width={845}
                height={592}
              />
            )}
          </div>
        </Container>
        <div className='text-center mb-[40px] md:mb-[56px] lg:[64px]'>
          <Typography transform='uppercase' as='h3' weight='font-bold'>
            <FadeOneBy text='  you may also like' />
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
