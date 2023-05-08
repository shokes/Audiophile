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
import Container from '../Container';
import FadeOneBy from '../Animation/fadeOneBy';

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
        starts_with: `${blok.heading}`,
        // change later
        is_startpage: 0,
      });

      setProducts((prev) =>
        // ! fix typings later
        data.stories.map((product: any) => {
          product.content.slug = product.slug;
          return product;
        })
      );
    };
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div {...storyblokEditable(blok)}>
      <div className='bg-black pb-[97px]'>
        <Container>
          <div className='border-b mb-[98px] border-white/20 pt-8  pb-9'>
            <Navigation />
          </div>
          <div className='text-white text-center'>
            <Typography as='h2' weight='font-bold' transform='uppercase'>
              <FadeOneBy text={blok.heading} />
            </Typography>
          </div>
        </Container>
      </div>
      <Container>
        {products &&
          products.map((product: any) => {
            return <Product key={product.name} product={product} />;
          })}
      </Container>
    </div>
  );
};

export default ProductSection;
