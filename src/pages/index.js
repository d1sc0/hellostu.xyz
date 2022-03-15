import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Link } from 'gatsby'
import '../styles.scss'

const HomePage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <div class="section home pt-5 pb-0 px-0">
        <p>
          Hello, I'm <Link to="/about">Stuart Mackenzie</Link>.
        </p>
        <p>
          I work at the digital change agency{' '}
          <a href="https://wearefuturegov.com">FutureGov</a> (soon to be{' '}
          <a href="https://tpximpact.com">TPXimpact</a>). I'm also know for
          being a father, husband, runner, photography nerd, dog owner and
          excotic disco dancer!
        </p>
        <p>
          I occasionally use this site to{' '}
          <Link to="/posts/">
            share ideas, experiments, thoughts and reflections
          </Link>{' '}
          but it largely exists to make it easier for people to find me across
          other bits of the internet.
        </p>
      </div>
    </Layout>
  )
}

export default HomePage
