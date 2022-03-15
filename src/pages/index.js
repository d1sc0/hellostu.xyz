import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Link } from 'gatsby'
import '../styles.scss'

const HomePage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <div class="section home py-6 px-0">
        <p class="title">
          Hello, I'm <Link>Stuart Mackenzie</Link>.
        </p>
        <p class="title">
          I work at the digital change agency <Link>FutureGov</Link> (becoming{' '}
          <Link>TPXimpact</Link>). I'm also know for being a father, husband,
          runner, photography nerd, dog owner and excotic disco dancer!
        </p>
        <p class="title">
          This site mostly serves to make it easier for people to find me across
          other bits of the internet but I also use it to{' '}
          <Link>share ideas, experiments, thoughts and reflections.</Link>
        </p>
      </div>
    </Layout>
  )
}

export default HomePage
