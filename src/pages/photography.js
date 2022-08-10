import * as React from 'react'
// import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Gallery from '@browniebroke/gatsby-image-gallery'
import '../styles.scss'

const PhotoPage = ({ data }) => {
  const images = data.allGooglePhotosPhoto.edges.map(({ node }) => ({
    ...node.file.childImageSharp,
    title: `${node.description}`,
  }))

  const lightboxOptions = {
    imageLoadErrorMessage: 'Oops, this image cannot be found',
    enableZoom: false,
    discourageDownloads: true,
    closeLabel: 'Close',
  }

  return (
    <Layout>
      <Seo
        description="Photography"
        title="Photography"
        imageURL="../images/post-images/social/oly-trip.jpg"
      />
      <h1 className="title is-size-4">Photography</h1>
      <div className="content is-medium py-5">
        <p>
          <Gallery
            images={images}
            gutter="0.5rem"
            lightboxOptions={lightboxOptions}
          />
        </p>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ImagesForGallery {
    allGooglePhotosPhoto {
      edges {
        node {
          description
          file {
            childImageSharp {
              thumb: gatsbyImageData(
                width: 500
                height: 500
                placeholder: BLURRED
              )
              full: gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
`

export default PhotoPage
