import * as React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
//import { StaticImage } from 'gatsby-plugin-image'
import '../styles.scss'

const JccPage = () => {
  return (
    <Layout>
      <Seo
        description="Jurassic Coast Challenge for Mind"
        title="My Jurassic Coast Challenge for Mind"
      />
      <h1 className="title is-size-4">
        Jurassic Coast Challenge '24 - Fundraising for Mind
      </h1>
      <div className="content is-medium py-5">
        <p>Page coming soon!</p>
        <p className="vidcontainer169">
          <iframe
            className="responsive-vid-full"
            src="https://www.youtube.com/embed/eITTnU0WJfQ?si=yZJS4vaSUbMRn5DL"
            title="Video placeholder"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </p>
        <p></p>
      </div>
    </Layout>
  )
}

export default JccPage
