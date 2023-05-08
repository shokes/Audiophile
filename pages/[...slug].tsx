import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from '@storyblok/react';
import Footer from '@/components/Footer';
import { NextSeo } from 'next-seo';

interface Paths {
  params: {
    slug: string[];
  };
}

export default function Page({ story }: any) {
  story = useStoryblokState(story);

  return (
    <div>
      <NextSeo
        title={`${
          story.slug.charAt(0).toUpperCase() + story.slug.slice(1)
        } - Audiophile`}
      />
      <StoryblokComponent blok={story.content} />
      <Footer />
    </div>
  );
}

export async function getStaticProps({ params }: Paths) {
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
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get('cdn/links/', {
    version: 'draft',
  });

  const paths: Paths[] = [];

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
