import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Bio from '../components/bio'
import { getSrc } from 'gatsby-plugin-image'
import '../styles.scss'

const PostTemplate = ({ data }) => {
  const post = data.mdx
  const tags = post.frontmatter.tags
  const { previous, next } = data
  const image = getSrc(post.frontmatter.postImages[0])
  return (
    <Layout>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        image={image}
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
      <div className="content is-medium py-5">
        <MDXRenderer frontmatter={post.frontmatter}>{post.body}</MDXRenderer>
      </div>
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
              to={`/posts/${previous.slug}`}
              className="pagination-previous"
              rel="prev"
            >
              ← {previous.frontmatter.title}
            </Link>
          )}
          {next && (
            <Link
              to={`/posts/${next.slug}`}
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
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        postImages {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      slug
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      slug
      frontmatter {
        title
      }
    }
  }
`
