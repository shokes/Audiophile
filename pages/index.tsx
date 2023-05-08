import { Fragment } from 'react';
import { DefaultSeo } from 'next-seo';
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from '@storyblok/react';
import Footer from '@/components/Footer';

export default function Home({ story }: any) {
  story = useStoryblokState(story);

  return (
    <Fragment>
      <DefaultSeo titleTemplate='%s | Audiophile' defaultTitle='Audiophile' />
      <StoryblokComponent blok={story.content} />
      <Footer />
    </Fragment>
  );
}

export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  let slug = 'home';

  // load the draft version
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
    revalidate: 3600, // revalidate every hour
  };
}
