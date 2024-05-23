import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata.author
  //const social = data.site.siteMetadata.social

  return (
    <div className="block rounded-corners py-4 has-background-white-ter">
      <article className="media p-4">
        <div className="media-left">
          <figure className="image is-64x64">
            <StaticImage
              src="../images/hello-stu.png"
              width={64}
              height={64}
              quality={95}
              alt="Profile picture"
            />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              This post was written by <strong>{author.name}</strong>
            </p>
            <p>{author.summary}</p>
            <p>
              <Link to="/about">Find out more</Link>
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Bio
