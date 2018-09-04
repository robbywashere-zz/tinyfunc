module.exports = {
  siteMetadata: {
    title: 'Tiny func',
    calendly: 'https://calendly.com/robby-polana/30min-meeting',
    github: 'https://github.com/robbywashere',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-125173528-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: false,
      },
      {
        resolve: `gatsby-plugin-favicon`,
        options: {
          logo: "./static/img/logo.svg.png",

          // WebApp Manifest Configuration
          appName: 'Tiny Func',
          appDescription: null,
          developerName: null,
          developerURL: null,
          dir: 'auto',
          lang: 'en-US',
          background: '#fff',
          theme_color: '#fff',
          display: 'standalone',
          orientation: 'any',
          start_url: '/',
          version: '1.0',

          icons: {
            android: true,
            appleIcon: true,
            appleStartup: true,
            coast: true,
            favicons: true,
            firefox: true,
            opengraph: true,
            twitter: true,
            yandex: true,
            windows: true
          }
        }
      },
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-styled-components',
      'gatsby-plugin-react-next',
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/pages/blog`,
          name: 'blog',
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/markdown-pages`,
          name: 'markdown-pages',
        },
      },
      `gatsby-transformer-remark`,
      'gatsby-plugin-remove-trailing-slashes',
    ],
    }
