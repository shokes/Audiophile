import { Fragment } from 'react';
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from '@storyblok/react';
import HomeProductOne from '@/components/HomeProductOne';

export default function Home({ story }: any) {
  story = useStoryblokState(story);

  return (
    <Fragment>
      <StoryblokComponent blok={story.content} />
      <HomeProductOne />
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
