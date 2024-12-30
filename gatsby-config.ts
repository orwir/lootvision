import type { GatsbyConfig } from "gatsby";
import path from 'path';

const config: GatsbyConfig = {
  pathPrefix: '/occamfilter',
  siteMetadata: {
    title: `Occam's Filter`,
    siteUrl: `https://orwir.github.io/occamfilter/`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@': path.resolve(__dirname, 'src'),
        },
        extensions: ['js', 'ts', 'tsx', 'svg', 'png', 'jpg', 'jpeg'],
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Roboto:400,700'],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-source-poe-metadata',
      options: {
        path: `${__dirname}/metadata/`,
      },
    },
  ],
};

export default config;
