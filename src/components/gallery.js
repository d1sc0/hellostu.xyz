import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query PhotoQuery {
      allGooglePhotosPhoto {
        nodes {
          file {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  //const author = data.site.siteMetadata.author
  //const social = data.site.siteMetadata.social

  return data.allGooglePhotosPhoto.nodes.map(photoNode => (
    <GatsbyImage image={getImage(photoNode.file)} className="imageFull" />
  ))
}

export default Gallery
