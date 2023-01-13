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
  const pageTitle = `Tagged: ${tagName}`
  return (
    <Layout>
      <Seo title={pageTitle} />
      <h1 className="title is-size-4 is-capitalized">{pageTitle}</h1>
      {posts.map(post => {
        const title = post.frontmatter.title || post.fields.slug
        const tags = post.frontmatter.tags
        return (
          <div
            className="block p-5 my-6 rounded-corners has-background-white-ter"
            key={post.id}
          >
            <h2 className="is-size-3 has-text-weight-bold mb-2">
              <Link to={`/posts${post.fields.slug}`} className="post-title">
                {title}
              </Link>
            </h2>
            <p className="is-size-6">
              <span className="tag is-success mr-3">
                Posted: {post.frontmatter.date}
              </span>
              {tags.map(tag => {
                return (
                  <span key={tag} className="tag is-info mr-2 mb-1">
                    <Link to={`/tags/${tag}`}>{tag}</Link>
                  </span>
                )
              })}
            </p>
            <p className="content is-medium py-3">
              {post.excerpt}
              <Link to={`/posts${post.fields.slug}`} className="ml-2">
                <strong>read more</strong>
              </Link>
            </p>
          </div>
        )
      })}

      <nav
        className="pagination py-4"
        role="navigation"
        aria-label="pagination"
      >
        <div className="container">
          {!isFirst && (
            <Link
              to={`/tags/${tagName}/${prevPage}`}
              className="pagination-previous is-pulled-left"
              rel="prev"
            >
              Previous Page
            </Link>
          )}
          {!isLast && (
            <Link
              to={`/tags/${tagName}/${nextPage}`}
              className="pagination-next is-pulled-right"
              rel="next"
            >
              Next Page
            </Link>
          )}
        </div>
      </nav>
    </Layout>
  )
}

export default PostsByTagList

export const PostsByTagListQuery = graphql`
  query PostsByTagListQuery($tagName: String, $skip: Int!, $limit: Int!) {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: [$tagName] } } }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        fields {
          slug
        }
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
