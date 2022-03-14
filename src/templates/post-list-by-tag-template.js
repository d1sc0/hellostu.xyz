import React from 'react'
import { graphql, Link } from 'gatsby'
import Seo from '../components/seo'
import Layout from '../components/layout'
import '../styles.scss'

const PostsByTagList = ({ data, pageContext }) => {
  const posts = data.allMdx.nodes
  const { tagName, currentPage, numTagPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numTagPages
  const prevPage = currentPage - 1 === 1 ? '' : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()
  const pageTitle = `Tag: ${tagName} (${currentPage} of ${numTagPages})`
  return (
    <Layout>
      <Seo title={pageTitle} />
      <h1 className="title is-size-2">{pageTitle}</h1>
      {posts.map(post => {
        const tags = post.frontmatter.tags
        const title = post.frontmatter.title || post.slug
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
            to={`/tags/${tagName}/${prevPage}`}
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
            to={`/tags/${tagName}/${nextPage}`}
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

export default PostsByTagList

export const PostsByTagListQuery = graphql`
  query PostsByTagListQuery($tagName: String, $skip: Int!, $limit: Int!) {
    allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { tags: { in: [$tagName] } } }
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
