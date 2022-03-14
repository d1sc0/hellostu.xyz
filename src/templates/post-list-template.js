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
  const pageTitle = `Posts (${currentPage} of ${numPages})`
  return (
    <Layout>
      <Seo title={pageTitle} />
      <h1 className="title is-size-2">{pageTitle}</h1>
      {posts.map(post => {
        const title = post.frontmatter.title || post.slug
        const tags = post.frontmatter.tags
        return (
          <div className="block" key={post.id}>
            <h2 className="is-size-4">
              <Link to={`/posts/${post.slug}`}>{title}</Link>
            </h2>
            <small className="is-size-7 mr-3">
              Posted: {post.frontmatter.date}
            </small>
            <small className="is-size-7">
              {tags.map(tag => {
                return (
                  <span key={tag} className="tag is-light mr-2">
                    <Link to={`/tags/${tag}`}>{tag}</Link>
                  </span>
                )
              })}
            </small>
            <p className="py-2">{post.excerpt}</p>
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
        excerpt(pruneLength: 480)
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
