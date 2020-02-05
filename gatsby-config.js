// TODO UPDATE THIS
/*
 The name of this site that we are current on.
*/
const THIS_SITE_DOMAIN = 'http://your.site.domain';

module.exports = {
  siteMetadata: {
    siteUrl: `${THIS_SITE_DOMAIN}`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `affiliates-landing-page`,
        short_name: `landing`,
        start_url: `/`,
        background_color: `#474c9a`,
        theme_color: `#474c9a`,
        display: `minimal-ui`,
        icon: `src/images/icon.png` // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    'gatsby-plugin-typescript',
    `gatsby-plugin-sitemap`
  ]
};
