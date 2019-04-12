module.exports = {
  pathPrefix: '/cpsc481-project',
  siteMetadata: {
    title: 'CPSC481 Project',
    description: '',
    author: '',
    siteUrl: 'https://awave1.github.io/cpsc481-project',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/layout'),
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      strategy: 'img',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-draw',
            options: {
              mermaid: {
                theme: 'forest',
              },
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '>',
              classPrefix: 'language-',
            },
          },
          {
            resolve: 'gatsby-remark-katex',
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/content/`,
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
  ],
};
