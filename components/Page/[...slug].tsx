import Head from 'next/head';
import Navigation from '../Navigation';
import Footer from '../Footer';
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from '@storyblok/react';

export default function Page({ story }: any) {
  story = useStoryblokState(story);

  console.log(story);

  return (
    <div>
      <Head>
        <title>{story ? story.name : 'My Site'}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navigation shoppingCart={true} />
      <StoryblokComponent blok={story.content} />
      <Footer />
    </div>
  );
}

export async function getStaticProps({ params }: any) {
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
