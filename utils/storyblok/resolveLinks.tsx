import { MultilinkStoryblok } from '../../@types/generated/storyblok';

/*
  This is a bit of a hack, we are removing the any keys from the generated types package which makes the types more strict
  But for this it is kind of useful as you have things that are sometimes there and sometimes not
  e.g. target and custom attributes
*/

export type CustomMultilinkStoryblok = MultilinkStoryblok & {
  [k: string]: any;
};

export function resolveLink(link?: CustomMultilinkStoryblok): string {
  if (!link) {
    return '';
  }

  switch (link.linktype) {
    case 'story':
      return link.anchor
        ? `/${link.cached_url}#${link.anchor}`
        : `/${link.cached_url}`;
    case 'asset':
      return link.url;
    case 'url':
      return link.url;
    case 'email':
      return `mailto:${link.email}`;
    default:
      return link.cached_url;
  }
}
