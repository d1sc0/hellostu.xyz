import React from 'react'
import { graphql, Link } from 'gatsby'
import Seo from '../components/seo'
import Layout from '../components/layout'
import '../styles.scss'

const PostList = ({ data, pageContext }) => {
  const posts = data.allMdx.nodes
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '' : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()
  //pageTitle = `Posts (${currentPage} of ${numPages})`
  return (
    <Layout>
      <Seo title="All Posts" />
      <h1 className="title is-size-4">All Posts</h1>
      {posts.map(post => {
        const title = post.frontmatter.title || post.slug
        const tags = post.frontmatter.tags
        return (
          <div className="block post-summary p-5 my-4" key={post.id}>
            <h2 className="is-size-3 has-text-weight-bold">
              <Link to={`/posts/${post.slug}`}>{title}</Link>
            </h2>
            <p className="is-size-6">
              <span className="is-size-7">
                Posted: {post.frontmatter.date}{' '}
              </span>
              {tags.map(tag => {
                return (
                  <span key={tag} className="tag is-light mr-2">
                    <Link to={`/tags/${tag}`}>{tag}</Link>
                  </span>
                )
              })}
            </p>
            <p className="is-size-6 py-2">{post.excerpt}</p>
          </div>
        )
      })}

      {!isFirst && (
        <nav
          className="pagination py-4 is-pulled-left"
          role="navigation"
          aria-label="pagination"
        >
          <Link
            to={`/posts/${prevPage}`}
            className="pagination-previous"
            rel="prev"
          >
            Previous Page
          </Link>
        </nav>
      )}
      {!isLast && (
        <nav
          className="pagination py-4 is-pulled-right"
          role="navigation"
          aria-label="pagination"
        >
          <Link
            to={`/posts/${nextPage}`}
            className="pagination-next"
            rel="next"
          >
            Next Page
          </Link>
        </nav>
      )}
    </Layout>
  )
}

export default PostList

export const postListQuery = graphql`
  query postListQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        slug
        id
        excerpt(pruneLength: 400)
        frontmatter {
          date(formatString: "DD MMM YYYY")
          title
          description
          tags
        }
      }
    }
  }
`
