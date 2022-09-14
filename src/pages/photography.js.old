import * as React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Gallery from 'react-image-gallery'
import '../styles.scss'
import '../../node_modules/react-image-gallery/styles/scss/image-gallery.scss'

const PhotoPage = ({ data }) => {
  const album = data.allGooglePhotosAlbum.edges[0].node.photos
  const images = album.map(item => {
    const container = {}
    container.original = item.file.publicURL
    container.thumbnail =
      item.file.childImageSharp.thumbnail.images.fallback.src
    container.description = item.description
    return container
  })

  return (
    <Layout>
      <Seo
        description="A small selection of my favourite photographs. If you're interested in
          any prints do please get in touch."
        title="Photography"
        imageUrl={images[0].original}
      />
      <h1 className="title is-size-4">Photography</h1>
      <div className="content is-medium py-2">
        <p>
          A small selection of my favourite photographs taken over the last few
          years. I've included a range of styles, outputs from different
          projects and a mix of film and digital.
        </p>
        <Gallery
          items={images}
          thumbnailPosition="top"
          showPlayButton={false}
          showFullscreenButton={false}
        />
        <p className="py-4">
          If you're interested in any prints do please{' '}
          <Link to="/contact">get in touch.</Link>
        </p>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ImagesForGallery {
    allGooglePhotosAlbum(filter: { title: { eq: "Portfolio" } }) {
      edges {
        node {
          photos {
            description
            file {
              publicURL
              childImageSharp {
                thumbnail: gatsbyImageData(
                  width: 150
                  height: 150
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
  }
`

export default PhotoPage
