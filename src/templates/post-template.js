import * as React from 'react'
import { Link, graphql } from 'gatsby'
// import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Bio from '../components/bio'
import { getSrc } from 'gatsby-plugin-image'
import '../styles.scss'
import { Embed } from 'hyvor-talk-react'

const PostTemplate = ({ data, children }) => {
  const post = data.mdx
  const tags = post.frontmatter.tags
  const { previous, next } = data
  const socialImg = getSrc(post.frontmatter.socialImage)
  return (
    <Layout>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        imageUrl={socialImg}
      />
      <h1 className="title is-size-2">{post.frontmatter.title}</h1>
      <small className="tag is-success mr-3">
        Posted: {post.frontmatter.date}
      </small>
      <small className="is-size-7">
        {tags.map(tag => {
          return (
            <span key={tag} className="tag is-info mr-2 mb-1">
              <Link to={`/tags/${tag}`}>{tag}</Link>
            </span>
          )
        })}
      </small>
      <div className="content is-medium pt-5">
        {/* <MDXRenderer frontmatter={post.frontmatter}>{post.body}</MDXRenderer> */}
        {children}
      </div>
      <Embed websiteId="8376" id={post.fields.slug} />
      <Bio />
      <nav
        className="pagination py-4"
        role="navigation"
        aria-label="pagination"
      >
        <div className="container">
          <h4 className="is-size-6 has-text-weight-bold py-3">
            Explore more posts...
          </h4>
          {previous && (
            <Link
              to={`/posts${previous.fields.slug}`}
              className="pagination-previous"
              rel="prev"
            >
              ← {previous.frontmatter.title}
            </Link>
          )}
          {next && (
            <Link
              to={`/posts${next.fields.slug}`}
              className="pagination-next"
              rel="next"
            >
              {next.frontmatter.title} →
            </Link>
          )}
        </div>
      </nav>
    </Layout>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query postByID($id: String!, $previousPostId: String, $nextPostId: String) {
    site {
      siteMetadata {
        siteTitle
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "DD MMM YY")
        description
        tags
        socialImage {
          childImageSharp {
            gatsbyImageData
          }
        }
        postImages {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
