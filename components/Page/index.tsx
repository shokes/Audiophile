import { storyblokEditable, StoryblokComponent } from '@storyblok/react';
import { SbBlokData } from '@storyblok/react';
import { PageStoryblok } from '@/@types/generated/storyblok';

interface PageProps {
  blok: SbBlokData & PageStoryblok;
}

const Page = ({ blok }: PageProps) => (
  <main {...storyblokEditable(blok)}>
    {(blok.body as SbBlokData[]).map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;
