import React from 'react';
import { SbBlokData, storyblokEditable } from '@storyblok/react';
import Feature from '../Feature';
import { FeatureSectionStoryblok } from '@/@types/generated/storyblok';
import Like from '../Like';
import Container from '../Container';

interface FeatureSectionProps {
  blok: SbBlokData & FeatureSectionStoryblok;
}

const FeatureSection = ({ blok }: FeatureSectionProps) => {
  return (
    <Container>
      <ul
        className='grid grid-cols-1  md:gap-x-[30px]  md:grid-cols-3'
        {...storyblokEditable(blok)}
      >
        {blok.features &&
          blok.features.map((feature) => {
            if (feature.component === 'feature') {
              return <Feature feature={feature} key={feature.name} />;
            }
            return <Like like={feature} key={feature.name} />;
          })}
      </ul>
    </Container>
  );
};

export default FeatureSection;
