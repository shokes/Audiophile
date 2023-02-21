import React from 'react';
import {
  SbBlokData,
  storyblokEditable,
  getStoryblokApi,
} from '@storyblok/react';
import Navigation from '../Navigation';
import Typography from '../Typography';
import Product from '../Product';
import { ProductSectionStoryblok } from '@/@types/generated/storyblok';
import { useState, useEffect } from 'react';

interface ProductSectionProps {
  blok: SbBlokData & ProductSectionStoryblok;
}

const ProductSection = ({ blok }: ProductSectionProps) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const storyblokApi = getStoryblokApi();
      const { data } = await storyblokApi.get(`cdn/stories`, {
        version: 'draft', // or 'published'
        starts_with: 'headphones/',
        // change later
        is_startpage: 0,
      });

      setProducts((prev) =>
        data.stories.map((product: any) => {
          product.content.slug = product.slug;
          return product;
        })
      );
    };
    getProducts();
  }, []);
  return (
    <div {...storyblokEditable(blok)}>
      <div className='bg-black pb-[97px]'>
        <div className=' max-w-[1110px]  mx-auto '>
          <div className='border-b mb-[98px] border-white/20 pt-8  pb-9'>
            <Navigation shoppingCart={true} />
          </div>
          <div className='text-white text-center'>
            <Typography as='h2' weight='font-bold' transform='uppercase'>
              {blok.heading}
            </Typography>
          </div>
        </div>
      </div>
      <div className='max-w-[1110px]  mx-auto'>
        {/* ! to fix typings later */}
        {products &&
          products.map((product: any) => {
            return <Product key={product.name} product={product} />;
          })}
      </div>
    </div>
  );
};

export default ProductSection;
