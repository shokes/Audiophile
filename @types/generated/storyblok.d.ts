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

export interface HeroStoryblok {
  image: string;
  title: string;
  description: string;
  _uid: string;
  component: "hero";
}

export interface HomeProductFourStoryblok {
  title?: string;
  description?: string;
  image?: string;
  _uid: string;
  component: "home_product_four";
}

export interface HomeProductOneStoryblok {
  name?: string;
  description?: string;
  link?: MultilinkStoryblok;
  image?: string;
  _uid: string;
  component: "home_product_one";
}

export interface HomeProductThreeStoryblok {
  image?: string;
  name?: string;
  link?: MultilinkStoryblok;
  _uid: string;
  component: "home_product_three";
}

export interface HomeProductTwoStoryblok {
  name: string;
  link: MultilinkStoryblok;
  image: string;
  _uid: string;
  component: "home_product_two";
}

export interface PageStoryblok {
  body?: any[];
  _uid: string;
  component: "page";
  uuid?: string;
}

export interface ProductInfoShortStoryblok {
  name?: string;
  description?: string;
  link?: MultilinkStoryblok;
  _uid: string;
  component: "product_info_short";
}
