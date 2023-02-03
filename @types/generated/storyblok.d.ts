import {StoryblokStory} from 'storyblok-generate-ts'

export type MultilinkStoryblok =
  | {
      cached_url?: string;
      linktype?: string;
    }
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "story";
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "asset" | "url";
    }
  | {
      email?: string;
      linktype?: "email";
    };

export interface FeatureStoryblok {
  image?: string;
  link?: MultilinkStoryblok;
  name?: string;
  _uid: string;
  component: "feature";
}

export interface FeatureSectionStoryblok {
  features?: any[];
  _uid: string;
  component: "feature_section";
}

export interface GridStoryblok {
  columns?: any[];
  _uid: string;
  component: "grid";
}

export interface HeroStoryblok {
  image: string;
  title: string;
  description: string;
  _uid: string;
  component: "hero";
}

export interface PageStoryblok {
  body?: any[];
  _uid: string;
  component: "page";
  uuid?: string;
}

export interface TeaserStoryblok {
  headline?: string;
  _uid: string;
  component: "teaser";
}
