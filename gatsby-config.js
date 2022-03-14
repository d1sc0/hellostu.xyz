module.exports = {
  siteMetadata: {
    siteTitle: `Hello Stu`,
    author: {
      name: `Stuart Mackenzie`,
      summary: `Stuart is an Executive Director and Coach at FutureGov (Becoming TPXimpact). Stuart is also known for being a father, husband, runner, photography nerd, dog owner and exotic disco dancer. He hates writing about himself in the third person!`,
    },
    description: `Hello Stu is the home page of Stuart Mackenzie - a change, design, delivery. `,
    siteUrl: `https://hellostu.xyz`,
    social: {
      twitter: `_disco`,
    },
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    /*       {
        resolve: `gatsby-plugin-google-gtag`,
        options: {
          // You can add multiple tracking ids and a pageview event will be fired for all of them.
          trackingIds: [
            'GA-TRACKING_ID', // Google Analytics / GA
            'AW-CONVERSION_ID', // Google Ads / Adwords / AW
            'DC-FLOODIGHT_ID', // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
          ],
          // This object gets passed directly to the gtag config command
          // This config will be shared across all trackingIds
          gtagConfig: {
            optimize_id: 'OPT_CONTAINER_ID',
            anonymize_ip: true,
            cookie_expires: 0,
          },
          // This object is used for configuration specific to this plugin
          pluginConfig: {
            // Puts tracking script in the head instead of the body
            head: false,
            // Setting this parameter is also optional
            respectDNT: true,
            // Avoids sending pageview hits from custom paths
            exclude: ['/preview/**', '/do-not-track/me/too/'],
            // Defaults to https://www.googletagmanager.com
            origin: 'YOUR_SELF_HOSTED_ORIGIN',
          },
        },
      },        */
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  title: node.frontmatter.title,
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + '/posts/' + node.slug,
                  guid: site.siteMetadata.siteUrl + '/posts/' + node.slug,
                })
              })
            },
            query: `
            {
              allMdx(sort: { order: DESC, fields: frontmatter___date }) {
                nodes {
                  slug
                  id
                  excerpt(pruneLength: 480)
                  frontmatter {
                    date(formatString: "DD MMM YYYY")
                    title
                    description
                  }
                }
              }
            }
            `,
            output: '/posts-rss.xml',
            title: 'Hello Stu Posts RSS',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/hello-stu.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
