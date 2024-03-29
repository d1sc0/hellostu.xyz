module.exports = {
  siteMetadata: {
    siteTitle: `hello stu`,
    author: {
      name: `Stuart Mackenzie`,
      summary: `Stuart works at TPXimpact (previously known as 
          FutureGov) changing and improving our public services. He's also known for being a father, husband, runner,
          photography nerd, podcaster and excotic disco dancer!`,
    },
    description: `hello stu is the website of Stuart Mackenzie - Stuart is a Senior Partner at TPXimpact (previously known as FutureGov). He is also known for being a father, husband, runner, photography nerd, podcaster and excotic disco dancer!`,
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
    `gatsby-plugin-sitemap`,
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
          //`gatsby-remark-gifs`,
        ],
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
                  url: site.siteMetadata.siteUrl + '/posts' + node.fields.slug,
                  guid: '/posts' + node.fields.slug,
                })
              })
            },
            query: `{
  allMdx(sort: {frontmatter: {date: DESC}}) {
    nodes {
      id
      excerpt(pruneLength: 480)
      frontmatter {
        date(formatString: "DD MMM YYYY")
        title
        description
      }
      fields {slug}
    }
  }
}`,
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
    {
      resolve: 'gatsby-plugin-simple-analytics',
      options: {
        trackPageViews: true,
        events: true,
        eventsGlobal: 'sa_event',
        ignorePages: ['pathname'],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
