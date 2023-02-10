import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from '@storyblok/react';

const ProductDetail = ({ story }: any) => {
  const router = useRouter();
  const { id } = router.query;
  story = useStoryblokState(story);

  console.log(id);

  return (
    <div>
      {/* <StoryblokComponent blok={story.content} /> */}
      <div>ProductDetail</div>
    </div>
  );
};

export default ProductDetail;

export async function getStaticProps({ params }: any) {
  console.log('wroiking');
  console.log(params);
  let slug = params.slug ? params.slug.join('/') : 'home';

  let sbParams = {
    version: 'draft', // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams as any);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  };
}

export async function getStaticPaths() {
  console.log('workig');
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get('cdn/links/', {
    version: 'draft',
  });

  let paths = [] as any;
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === 'home') {
      return;
    }

    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split('/');

    paths.push({ params: { slug: splittedSlug } });
  });

  return {
    paths: paths,
    fallback: false,
  };
}
