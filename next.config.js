const config = {
  reactStrictMode: true,
  env: {
    ACCESS_TOKEN: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  },

  images: {
    domains: ['a.storyblok.com'],
  },
};

module.exports = config;
