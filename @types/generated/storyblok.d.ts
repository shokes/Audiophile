import {StoryblokStory} from 'storyblok-generate-ts'

export interface CheckOutFormStoryblok {
  name?: string;
  _uid: string;
  component: "check_out_form";
}

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

export interface AssetStoryblok {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  focus?: string;
}

export interface FeatureStoryblok {
  link: MultilinkStoryblok;
  name?: string;
  feature_image?: AssetStoryblok;
  _uid: string;
  component: "feature";
}

export interface FeatureSectionStoryblok {
  features?: any[];
  _uid: string;
  component: "feature_section";
}

export interface HeroStoryblok {
  title: string;
  description: string;
  link?: MultilinkStoryblok;
  desktop_image?: AssetStoryblok;
  mobile_image?: AssetStoryblok;
  tablet_image?: AssetStoryblok;
  _uid: string;
  component: "hero";
}

export interface HomeProductFourStoryblok {
  description?: string;
  image?: string;
  desktop_image?: AssetStoryblok;
  mobile_image?: AssetStoryblok;
  tablet_image?: AssetStoryblok;
  _uid: string;
  component: "home_product_four";
}

export interface HomeProductOneStoryblok {
  name?: string;
  description?: string;
  link?: MultilinkStoryblok;
  image?: string;
  desktop_image?: AssetStoryblok;
  mobile_image?: AssetStoryblok;
  tablet_image?: AssetStoryblok;
  _uid: string;
  component: "home_product_one";
}

export interface HomeProductThreeStoryblok {
  name?: string;
  link?: MultilinkStoryblok;
  desktop_image?: AssetStoryblok;
  tablet_image?: AssetStoryblok;
  mobile_image?: AssetStoryblok;
  _uid: string;
  component: "home_product_three";
}

export interface HomeProductTwoStoryblok {
  name: string;
  link: MultilinkStoryblok;
  image: string;
  desktop_image?: AssetStoryblok;
  mobile_image?: AssetStoryblok;
  tablet_image?: AssetStoryblok;
  _uid: string;
  component: "home_product_two";
}

export interface InBoxStoryblok {
  quantity?: number;
  item?: string;
  _uid: string;
  component: "in_box";
}

export interface LikeStoryblok {
  image?: AssetStoryblok;
  name?: string;
  link?: MultilinkStoryblok;
  desktop_image?: AssetStoryblok;
  tablet_image?: AssetStoryblok;
  mobile_image?: AssetStoryblok;
  _uid: string;
  component: "like";
}

export interface PageStoryblok {
  body?: any[];
  _uid: string;
  component: "page";
  uuid?: string;
}

export interface ProductStoryblok {
  new?: boolean;
  name?: string;
  image?: string;
  description?: string;
  link?: MultilinkStoryblok;
  reverse?: "" | "reverse" | "no-reverse";
  type?: string;
  desktop_image?: AssetStoryblok;
  mobile_image?: AssetStoryblok;
  tablet_image?: AssetStoryblok;
  _uid: string;
  component: "product";
}

export interface ProductDetailStoryblok {
  name: string;
  new?: boolean;
  description: string;
  reverse: "reverse" | "no-reverse";
  category: "headphones" | "earphones" | "speaker";
  price?: number;
  featureOne?: string;
  featureTwo?: string;
  image2?: AssetStoryblok;
  image3?: AssetStoryblok;
  image4?: AssetStoryblok;
  body?: any[];
  link?: MultilinkStoryblok;
  inBox?: any[];
  short?: string;
  cartImage?: AssetStoryblok;
  desktop_image?: AssetStoryblok;
  mobile_image?: AssetStoryblok;
  tablet_image?: AssetStoryblok;
  detail_desktop?: AssetStoryblok;
  detail_tablet?: AssetStoryblok;
  detail_mobile?: AssetStoryblok;
  image2_mobile?: AssetStoryblok;
  image3_mobile?: AssetStoryblok;
  image4_mobile?: AssetStoryblok;
  _uid: string;
  component: "product_detail";
}

export interface ProductInfoShortStoryblok {
  name?: string;
  description?: string;
  link?: MultilinkStoryblok;
  _uid: string;
  component: "product_info_short";
}

export interface ProductSectionStoryblok {
  heading?: string;
  products?: any[];
  _uid: string;
  component: "product_section";
}
