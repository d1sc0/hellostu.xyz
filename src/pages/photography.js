import * as React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Gallery from '../components/gallery'
import '../styles.scss'

const PhotoPage = () => {
  return (
    <Layout>
      <Seo description="Photography" title="Photography" />
      <h1 className="title is-size-4">Photography</h1>
      <div className="content is-medium py-5">
        <p>
          <Gallery />
        </p>
      </div>
    </Layout>
  )
}

export default PhotoPage
