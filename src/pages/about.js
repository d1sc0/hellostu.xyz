import * as React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'
import '../styles.scss'

const AboutPage = () => {
  return (
    <Layout>
      <Seo description="Everything you need to know ever" title="About" />
      <h1 className="title is-size-4">About Stuart Mackenzie</h1>
      <div className="content is-medium py-5">
        <p>
          <StaticImage
            alt="Stuart Mackenzie"
            title="My mug shot - Stuart Mackenzie"
            src="../images/page-images/stuart_mackenzie.jpg"
            className="imageRight"
            width={450}
          />
          I live in <a href="https://www.visit-dorset.com/">Dorset</a> along
          with my wife Chloe and daughter Robyn. I spend much of my time working
          out of London transforming public services as a Senior Partner at{' '}
          <a href="https://tpximpact.com">TPXimpact</a> (previously known as{' '}
          <a href="https://wearefuturegov.com">FutureGov</a>.
        </p>
        <p>
          I've worked in a variety of technology & management roles over the
          last 20 years but largely I prefer people to computers and code. I'm
          slightly obsessed (in a healthy way) in making change happen within
          organisations and I'm happiest when supporting teams and clients
          navigate complexity (human and technical) to deliver better outcomes
          for users.
        </p>
        <p>
          This website is largely a selfish endeavour. I don't write often but
          it's a skill I know I should practice. Having the site gives me a
          place to do just that. Often I write just as a method to bring
          structure to the things I have floating around in my head. For this
          reason, I inevitably write more posts than I publish. Hopefully, the
          few that make it as far as publication might be useful to someone
          other than me but that's not my primary goal.
        </p>
        <p>
          Having a website also provides me with a sandbox to test ideas and
          prototype in code. If things feel a little broken or don't work as you
          expect then this might be as a result of one of these experiments.
        </p>
        <p>
          For those interested in technology the site in it's current form has
          been built using <a href="https://www.gatsbyjs.org/">Gatsby</a> which
          is currently my favourite static site generator. I use{' '}
          <a href="https://firebase.google.com/">Firebase</a> for hosting the
          static files. All of the code and content is maintained in{' '}
          <a href="https://github.com/d1sc0/hellostu.xyz">Github</a>.
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage
