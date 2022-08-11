module.exports = {
  siteMetadata: {
    siteTitle: `hello stu`,
    author: {
      name: `Stuart Mackenzie`,
      summary: `Stuart works at the digital change agency FutureGov (soon to be 
          TPXimpact). He's also known for being a father, husband, runner,
          photography nerd, dog owner and excotic disco dancer!`,
    },
    description: `hello stu is the website of Stuart Mackenzie - Stuart is a Director at the digital change agency FutureGov (becoming TPXimpact). I'm also known for being a father, husband, runner, photography nerd, dog owner and excotic disco dancer!`,
    siteUrl: `https://hellostu.xyz`,
    social: {
      twitter: `_disco`,
    },
  },
  plugins: [
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
    `gatsby-plugin-react-leaflet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
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
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-gifs`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-panelbear`,
      options: {
        siteID: '8jx5vUYPjkx',
      },
    },
    {
      resolve: 'gatsby-source-google-photos',
      options: {
        albumsTitles: ['Portfolio'],
        //---
        // All the following options are OPTIONAL
        //---
        //
        // Slower but easier to use.
        // It will make `albumsTitles` options useless
        // You need to rename your `GooglePhotos albums first
        // albumsRegex: /^mygatsbysite.com/,
        //
        // Useful to add some metadata
        // eg: Rename your `GooglePhotos` albums: "mygatsbysite.com/travel/country"
        // albumsUpdate: album => {
        //  const [, category, country] = album.title.split('/')
        //  return {
        //    ...album,
        //    category,
        //    country,
        //  }
        //},
        //
        // Download smaller or bigger photos
        photosMaxWidth: 1200,
        photosMaxHeight: 1200,
        photosCrop: false,
        //
        // For a better stack trace and more information
        // Useful when you open a issue to report a bug
        //debug: true,
      },
    },
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
                  guid: '/posts/' + node.slug,
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
        name: `hello stu`,
        short_name: `hello stu`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/hello-stu.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
